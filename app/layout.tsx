import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/effect-fade";
import "@/styles/bootstrap.scss";
import "@/styles/global.css";
import Provider from "./provider";
import Nav from "@components/nav";
import Footer from "@components/footer";

const poppins = Poppins({
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Majime",
    default: "Majime home site",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Provider>
          <Nav />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
