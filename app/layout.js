import Theming from "@/Theme/Theming";
import "./globals.css";
import Header from "@/app/Header/page";
import Footer from "@/app/Footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <Theming>
          <Header />
          {children}
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
