import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
