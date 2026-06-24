import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "chris_rau@outlook.com";
const FROM_EMAIL = "onboarding@resend.dev";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, message } = payload;

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] Missing RESEND_API_KEY environment variable.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const safeName = name.trim();
  const safeEmail = email.trim();
  const safeMessage = message.trim();

  try {
    const { data, error } = await resend.emails.send({
      from: `Chris Rau <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: safeEmail,
      subject: `New portfolio message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\n${safeMessage}`,
    });

    if (error) {
      console.error("[contact] Resend returned an error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ id: data?.id ?? null }, { status: 200 });
  } catch (err) {
    console.error("[contact] Unexpected error sending email:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
