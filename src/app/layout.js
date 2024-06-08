import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="description" content="Desarrollando de tecnologia para hacer de un mundo complicado un mundo mas sencillo" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <meta name="keywords" content="Swoou, swoou cargo, Swoou mathematics, Swoou math, 
                                      Materiales didacticos para la enseñanza de Matemáticas,
                                      Materiales didacticos para la enseñanza de Matemáticas a primaria,
                                      aplicaciones para la enseñanza de Matemáticas,
                                      aplicaciones para la enseñanza de Matemáticas a primaria,
                                      plataformas para la enseñanza de Matemáticas,
                                      plataformas para la enseñanza de Matemáticas a primaria,
                                      cursos particulares de Matemáticas para primaria,
                                      crear un sitio web,
                                      crear una pagina web,
                                      comprar pagina web" />
        <meta name="author" content="Raul Choque Romero, web and app developer, fundador de swoou.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://swoou.com"/>
        <title>Swoou</title>
      </head>
      <body className={inter.className}>
      <Navbar />
        {children}</body>
    </html>
  )
}
