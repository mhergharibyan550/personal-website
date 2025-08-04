import { Button, Html } from "@react-email/components";
import * as React from "react";

type AutoResponseEmailProps = {
  name: string;
  fromEmail: string;
  subject: string;
  message: string;
};

export default function AutoResponseEmail({
  name,
  fromEmail,
  subject,
  message,
}: AutoResponseEmailProps) {
  return (
    <Html>
      <p>Name: {name}</p>
      <p>Email: {fromEmail}</p>
      <p>Subject {subject}</p>
      <p>Message: {message}</p>
    </Html>
  );
}
