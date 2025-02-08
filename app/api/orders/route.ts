import { NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Order from "@/lib/models/order"
import User from "@/lib/models/user"
import { getSession } from "@/lib/auth"

export async function GET(request: Request) {
  try {
    await connectDB()

    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const orders = await Order.find(session.role === "admin" ? {} : { user: session.id })
      .populate("user", "name email")
      .populate("items.product")
      .sort({ createdAt: -1 })

    return NextResponse.json(orders)
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

    const { items, shippingAddress, paymentInfo } = await request.json()

    // Calculate total amount
    const totalAmount = items.reduce((total: number, item: any) => {
      return total + item.product.price * item.quantity
    }, 0)

    const order = await Order.create({
      user: session.id,
      items,
      shippingAddress,
      paymentInfo,
      totalAmount,
    })

    // Clear user's cart after order creation
    await User.findByIdAndUpdate(session.id, { cart: [] })

    return NextResponse.json(order)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

