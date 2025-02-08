import { ProductGrid } from "@/components/products/product-grid"

export default function ShopPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Shop</h1>
        <p className="text-muted-foreground">Browse our collection of 3D models ready to print.</p>
      </div>
      <div className="mt-8">
        <ProductGrid />
      </div>
    </div>
  )
}

