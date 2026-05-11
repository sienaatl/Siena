import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}