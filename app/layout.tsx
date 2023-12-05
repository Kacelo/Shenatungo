"use client";
import "swiper/css";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { theme } from "./theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SHENATUNGO</title>
        <meta name="description" content="Beauty is our duty" />
        {/* Other meta tags as needed */}
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
