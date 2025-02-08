"use client"

import { Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

interface ProductCardProps {
  id: string
  title: string
  description: string
  price: number
  image: string
  category: string
}

export function ProductCard({ id, title, description, price, image, category }: ProductCardProps) {
  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart.`,
    })
  }

  const addToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${title} has been added to your wishlist.`,
    })
  }

  return (
    <Card className="group overflow-hidden">
      <Link href={`/product/${id}`}>
        <div className="aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={400}
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
      </Link>
      <CardContent>
        <div className="text-lg font-bold">${price.toFixed(2)}</div>
        <div className="text-sm text-muted-foreground">{category}</div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1" onClick={addToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button variant="outline" size="icon" onClick={addToWishlist}>
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

