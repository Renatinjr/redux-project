import "../styles/globals.css";

export const metadata = {
  title: "Buy store",
  description: "Generated by create next app",
};
type RootLayoutPorps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutPorps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
