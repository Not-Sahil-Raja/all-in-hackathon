import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { User } from "lucide-react";
export const metadata = {
  title: "Jengo",
  description: "Educational platform for underprivileged children",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
