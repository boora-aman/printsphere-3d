"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormFooter,
  FormHeader,
  FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  price: z.number().min(0),
  category: z.string().min(1),
  modelUrl: z.string().min(1),
  thumbnailUrl: z.string().min(1),
  fileFormat: z.enum(["STL", "OBJ", "FBX"]),
})

interface ProductFormProps {
  product?: any
  onSuccess: () => void
}

export function ProductForm({ product, onSuccess }: ProductFormProps) {
  const [formData, setFormData] = useState({
    title: product?.title || "",
    description: product?.description || "",
    price: product?.price || 0,
    category: product?.category || "",
    modelUrl: product?.modelUrl || "",
    thumbnailUrl: product?.thumbnailUrl || "",
    fileFormat: product?.fileFormat || "STL",
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true)

    try {
      const res = await fetch(`/api/products${product ? `/${product._id}` : ""}`, {
        method: product ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error("Failed to save product")
      }

      toast({
        title: "Product saved",
        description: "The product has been saved successfully.",
      })

      onSuccess()
      router.refresh()
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const CATEGORIES = ["Figurines", "Industrial", "Gadgets", "Home & Decor"]
  const FILE_FORMATS = ["STL", "OBJ", "FBX"]

  return (
    <Form onSubmit={handleSubmit}>
      <FormHeader>
        <h2 className="text-lg font-bold">{product ? "Edit Product" : "Add Product"}</h2>
      </FormHeader>
      <div className="grid gap-4">
        <FormField
          controlId="title"
          label="Title"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        >
          <FormControl type="text" />
          <FormDescription>Enter the title of the product.</FormDescription>
          <FormMessage />
        </FormField>
        <FormField
          controlId="description"
          label="Description"
          name="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        >
          <FormControl as={Textarea} />
          <FormDescription>Enter the description of the product.</FormDescription>
          <FormMessage />
        </FormField>
        <FormField
          controlId="price"
          label="Price"
          name="price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: Number.parseFloat(e.target.value) })}
          required
        >
          <FormControl type="number" />
          <FormDescription>Enter the price of the product.</FormDescription>
          <FormMessage />
        </FormField>
        <FormField
          controlId="category"
          label="Category"
          name="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        >
          <FormControl as={Select}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </FormControl>
          <FormDescription>Select the category of the product.</FormDescription>
          <FormMessage />
        </FormField>
        <FormField
          controlId="modelUrl"
          label="Model URL"
          name="modelUrl"
          value={formData.modelUrl}
          onChange={(e) => setFormData({ ...formData, modelUrl: e.target.value })}
          required
        >
          <FormControl type="text" />
          <FormDescription>Enter the URL of the 3D model.</FormDescription>
          <FormMessage />
        </FormField>
        <FormField
          controlId="thumbnailUrl"
          label="Thumbnail URL"
          name="thumbnailUrl"
          value={formData.thumbnailUrl}
          onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
          required
        >
          <FormControl type="text" />
          <FormDescription>Enter the URL of the thumbnail image.</FormDescription>
          <FormMessage />
        </FormField>
        <FormField
          controlId="fileFormat"
          label="File Format"
          name="fileFormat"
          value={formData.fileFormat}
          onChange={(e) => setFormData({ ...formData, fileFormat: e.target.value })}
          required
        >
          <FormControl as={Select}>
            <SelectTrigger>
              <SelectValue placeholder="Select file format" />
            </SelectTrigger>
            <SelectContent>
              {FILE_FORMATS.map((format) => (
                <SelectItem key={format} value={format}>
                  {format}
                </SelectItem>
              ))}
            </SelectContent>
          </FormControl>
          <FormDescription>Select the file format of the 3D model.</FormDescription>
          <FormMessage />
        </FormField>
      </div>
      <FormFooter>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </FormFooter>
    </Form>
  )
}
"

