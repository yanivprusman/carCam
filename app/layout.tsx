import type { Metadata } from "next";
import "./globals.css";
import FeedbackChatMount from "./FeedbackChatMount";

export const metadata: Metadata = {
  title: "carCam",
  description: "Car dash camera remote: snapshot, trigger a recording, check on the car (TARGET Noga4G Two via the OnaGo cloud)",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}
        <FeedbackChatMount />
      </body>
    </html>
  );
}
