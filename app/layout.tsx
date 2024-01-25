import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Convert Video into GIF within a second!',
  description: 'Turn your favorite videos into shareable gifs with GifMaker. Our easy-to-use app lets you quickly convert videos to gifs without any hassle. Choose your favorite clip, select the start and end points, and let GifMaker do the rest. Share your newly created gifs with your friends and family on social media or messaging apps. With GifMaker, the possibilities are endless.',
  alternates: {
    canonical: 'https://gifmaker.snapbit.in'
  },
  openGraph: {
    type: 'website',
    siteName: 'GIF Maker',
    title: 'Convert Video into GIF within a second!',
    url: 'https://gifmaker.snapbit.in',
    description: 'Turn your favorite videos into shareable gifs with GifMaker. Our easy-to-use app lets you quickly convert videos to gifs without any hassle. Choose your favorite clip, select the start and end points, and let GifMaker do the rest. Share your newly created gifs with your friends and family on social media or messaging apps. With GifMaker, the possibilities are endless.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
