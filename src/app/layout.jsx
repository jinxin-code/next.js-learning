import '../index.css'

export const metadata = {
  title: 'User Management System',
  description: 'A user management system built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}