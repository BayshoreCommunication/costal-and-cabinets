import { Open_Sans } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

const open_sans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://coastalcabinetsandclosets.com/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Providers>
          <div className="overflow-x-hidden text-black bg-white">
            <MainNavbar />
            {children}
            <Footer />
            <ScrollToTopButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
