import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ShoppingCart, Search, User2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type React from "react" // Import React

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PrintSphere 3D - Your 3D Printing Marketplace",
  description: "Browse and purchase 3D models or upload your custom designs for printing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/placeholder.svg" alt="PrintSphere 3D" width={32} height={32} className="rounded-lg" />
                <span className="font-bold">PrintSphere 3D</span>
              </Link>
              <nav className="flex items-center space-x-6 px-6">
                <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">
                  Shop
                </Link>
                <Link href="/custom-print" className="text-sm font-medium transition-colors hover:text-primary">
                  Custom Print
                </Link>
                <Link href="/support" className="text-sm font-medium transition-colors hover:text-primary">
                  Support
                </Link>
              </nav>
              <div className="flex flex-1 items-center justify-end space-x-4">
                <div className="w-full max-w-xs">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search products..." className="pl-8" />
                  </div>
                </div>
                <nav className="flex items-center space-x-2">
                  <Link href="/cart">
                    <Button variant="ghost" size="icon" className="relative">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground">
                        0
                      </span>
                    </Button>
                  </Link>
                  <Link href="/account">
                    <Button variant="ghost" size="icon">
                      <User2 className="h-5 w-5" />
                    </Button>
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t">
            <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-2">
                  <Image src="/placeholder.svg" alt="PrintSphere 3D" width={24} height={24} className="rounded-lg" />
                  <span className="font-bold">PrintSphere 3D</span>
                </div>
                <p className="text-sm text-muted-foreground">Your one-stop shop for all things 3D printing.</p>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Company</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/about" className="text-muted-foreground hover:text-foreground">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Help</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                        Shipping
                      </Link>
                    </li>
                    <li>
                      <Link href="/returns" className="text-muted-foreground hover:text-foreground">
                        Returns
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Social</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                        Instagram
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t">
              <div className="container flex flex-col gap-4 py-6 text-center text-sm text-muted-foreground md:flex-row md:gap-6">
                <p>© 2024 PrintSphere 3D. All rights reserved.</p>
                <nav className="flex justify-center gap-4 md:ml-auto">
                  <Link href="/privacy" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-foreground">
                    Terms of Service
                  </Link>
                </nav>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

