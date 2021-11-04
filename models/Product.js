import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, requied: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, requied: true },
  },
  { timestamps: true }
);

export default mongoose.model('Product', ProductSchema);
