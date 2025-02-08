import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  modelUrl: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  fileFormat: {
    type: String,
    required: true,
    enum: ["STL", "OBJ", "FBX"],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  printSettings: {
    material: String,
    resolution: String,
    infill: Number,
    supports: Boolean,
  },
})

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)

export default Product

