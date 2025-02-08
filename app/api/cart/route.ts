import { NextResponse } from "next/server"
import connectDB from "@/lib/db"
import { getSession } from "@/lib/auth"
import User from "@/lib/models/user"
import Product from "@/lib/models/product"

export async function GET(request: Request) {
  try {
    await connectDB()

    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await User.findById(session.id).populate("cart.product")

    return NextResponse.json(user.cart || [])
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await connectDB()

    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { productId, quantity = 1, printSettings } = await request.json()

    const product = await Product.findById(productId)
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const user = await User.findById(session.id)

    // Check if product already in cart
    const cartItemIndex = user.cart?.findIndex((item: any) => item.product.toString() === productId)

    if (cartItemIndex > -1) {
      // Update quantity if product exists
      user.cart[cartItemIndex].quantity += quantity
      if (printSettings) {
        user.cart[cartItemIndex].printSettings = printSettings
      }
    } else {
      // Add new product to cart
      const cartItem = {
        product: productId,
        quantity,
        printSettings,
      }
      if (!user.cart) user.cart = []
      user.cart.push(cartItem)
    }

    await user.save()

    return NextResponse.json(user.cart)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    await connectDB()

    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { productId } = await request.json()

    const user = await User.findById(session.id)

    user.cart = user.cart.filter((item: any) => item.product.toString() !== productId)

    await user.save()

    return NextResponse.json(user.cart)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

