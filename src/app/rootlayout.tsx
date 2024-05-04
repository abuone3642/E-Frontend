import { ShoppingCartProvider } from "./context/shop-context";


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  })
   {
    return (
      <html lang="en">
        <body>
           <ShoppingCartProvider>
             {children}
           </ShoppingCartProvider>
        </body>
      </html>
    )
  }