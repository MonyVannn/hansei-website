"use server";

export type FooterContactState = {
  success: boolean;
  message: string;
  errors: Partial<Record<"name" | "email" | "message", string>>;
};

export const initialFooterContactState: FooterContactState = {
  success: false,
  message: "",
  errors: {},
};

function getFieldValue(formData: FormData, field: string): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitFooterContact(
  _prevState: FooterContactState,
  formData: FormData
): Promise<FooterContactState> {
  const name = getFieldValue(formData, "name");
  const email = getFieldValue(formData, "email");
  const phone = getFieldValue(formData, "phone");
  const company = getFieldValue(formData, "company");
  const message = getFieldValue(formData, "message");

  const errors: FooterContactState["errors"] = {};

  if (!name) errors.name = "Please add your name.";
  if (!email) {
    errors.email = "Please add your email.";
  } else if (!isValidEmail(email)) {
    errors.email = "Please use a valid email address.";
  }
  if (!message) errors.message = "Please tell us about your project.";

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[footer-contact]", { name, email, phone, company, message });
  }

  // TODO: Send this payload to your email/CRM provider.
  return {
    success: true,
    message: "Thanks. We received your message and will reply soon.",
    errors: {},
  };
}
