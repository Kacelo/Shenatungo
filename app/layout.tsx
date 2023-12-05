"use client"
import 'swiper/css';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider} from '@chakra-ui/react'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { theme } from './theme'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior: "smooth"}}>
      <head>
        <title>SHENATUNGO</title>
        <meta title="description" content="Beauty is our duty" />
        <link
          rel="icon"
          type="image/jpeg"
          sizes="32x32"
          href="shena-logo.jpeg"
        />
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
