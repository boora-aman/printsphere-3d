"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminProducts } from "./products"
import { AdminOrders } from "./orders"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("products")

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Admin Dashboard</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          <AdminProducts />
        </TabsContent>
        <TabsContent value="orders">
          <AdminOrders />
        </TabsContent>
      </Tabs>
    </div>
  )
}

