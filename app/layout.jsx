import localFont from "next/font/local";
import "./globals.css";

const samarkaFont = localFont({
  src: '../public/Samarka.ttf',
  variable: '--font-samarka',
});

export const metadata = {
  title: "Hindi Club | यत् भावो - तत् भवत",
  description: "यत् भावो - तत् भवत",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={samarkaFont.variable}>
        {children}
      </body>
    </html>
  );
}