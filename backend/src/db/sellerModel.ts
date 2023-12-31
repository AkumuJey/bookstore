import mongoose, { Schema } from "mongoose";

export interface SellerType extends Document {
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  retailStats: {
    totalPurchases: number;
  };
}
const sellerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    retailStats: {
      totalSales: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

 const Seller = mongoose.model("Seller", sellerSchema);
 export default Seller

