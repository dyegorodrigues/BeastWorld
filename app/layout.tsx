import type { Metadata } from 'next'
import '@xyflow/react/dist/style.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'BeastWorld — World OS',
  description: 'A visual operating system for an epic connected world.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
