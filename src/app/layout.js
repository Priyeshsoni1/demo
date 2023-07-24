import Navbar from '@/component/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/component/AuthProvider/AuthProvider'
import ReactClientProvider from '@/component/ReactQuery/ReactClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata={
  title:"Emeis technologies",
  desc:"Build the tech",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <ReactClientProvider>
          <AuthProvider>
          <Navbar/>
        <div className='container'>
        
        {children}
        <Footer/>
        </div>
        </AuthProvider>
        </ReactClientProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}
