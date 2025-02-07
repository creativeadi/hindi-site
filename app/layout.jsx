import "./globals.css";

export const metadata = {
  title: "Hindi Club | यत् भावो - तत् भवत",
  description: "यत् भावो - तत् भवत",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-samarka"> {/* Optional Tailwind class */}
        {children}
      </body>
    </html>
  );
}
