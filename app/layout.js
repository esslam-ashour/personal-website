import "@/app/ui/globals.css";
import { fira } from "/app/ui/fonts";

export const metadata = {
  title: 'Esslam Ashour',
  description: "Esslam Ashour's personal website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  )
}
