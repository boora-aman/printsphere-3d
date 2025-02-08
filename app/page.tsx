import { ArrowRight, Package, Upload, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FeaturedModels } from "@/components/featured-models"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Your Ideas, Our Technology
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Browse thousands of 3D models or upload your own designs. Professional 3D printing service at your
            fingertips.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button asChild size="lg">
              <Link href="/shop">
                Browse Models
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/custom-print">
                Start Custom Print
                <Upload className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-16">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Features</h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-lg">
            Professional 3D printing services and marketplace for creators and businesses.
          </p>
        </div>
        <div className="mx-auto grid gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <Package className="h-14 w-14" />
              <CardTitle>3D Model Marketplace</CardTitle>
              <CardDescription>Browse and purchase from thousands of pre-designed 3D models.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Upload className="h-14 w-14" />
              <CardTitle>Custom Printing</CardTitle>
              <CardDescription>Upload your designs and get them printed with professional quality.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-14 w-14" />
              <CardTitle>Fast Delivery</CardTitle>
              <CardDescription>Quick turnaround times and worldwide shipping available.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Featured Models Section */}
      <section className="container py-8 md:py-12 lg:py-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="max-w-[58rem] space-y-1">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl">Featured Models</h2>
              <p className="text-muted-foreground sm:text-lg">Popular 3D models ready to print.</p>
            </div>
            <Button asChild variant="ghost">
              <Link href="/shop">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <FeaturedModels />
        </div>
      </section>

      {/* Partners Section */}
      <section className="container py-8 md:py-12 lg:py-16">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl">Trusted Partners</h2>
            <p className="mt-2 text-muted-foreground sm:text-lg">
              We work with industry-leading manufacturers and suppliers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center p-8">
                <Image
                  src="/placeholder.svg"
                  alt={`Partner ${i}`}
                  width={120}
                  height={60}
                  className="grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

