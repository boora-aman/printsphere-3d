"use client"

import { ProductCard } from "@/components/product-card"

const FEATURED_PRODUCTS = [
  {
    id: "1",
    title: "Low Poly Dragon",
    description: "Detailed dragon model perfect for FDM printing",
    price: 14.99,
    image: "/placeholder.svg",
    category: "Figurines",
  },
  {
    id: "2",
    title: "Phone Stand",
    description: "Adjustable phone stand with cable management",
    price: 9.99,
    image: "/placeholder.svg",
    category: "Gadgets",
  },
  {
    id: "3",
    title: "Succulent Planter",
    description: "Modern geometric planter for small plants",
    price: 19.99,
    image: "/placeholder.svg",
    category: "Home & Decor",
  },
  {
    id: "4",
    title: "Mechanical Parts Kit",
    description: "Collection of common mechanical components",
    price: 24.99,
    image: "/placeholder.svg",
    category: "Industrial",
  },
]

export function FeaturedModels() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURED_PRODUCTS.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

