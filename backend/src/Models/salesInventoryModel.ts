import { Schema, model } from "mongoose";

const salesInventoryModel = new Schema({
  totalSales: {
    type: Number,
    default: 0,
    required: true,
  },
  totalBooks: {
    type: Number,
    default: 0,
    required: true,
  },
});

export const SalesInventoryModel = model("salesInventory", salesInventoryModel);
