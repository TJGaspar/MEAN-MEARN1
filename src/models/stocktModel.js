import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const StockSchema = new Schema(
	{
		productName: {
			type: String,
			required: "enter the product name",
		},
		quantity: {
			type: Number,
			required: "enter the quantity",
		},
		creationDate: {
			type: Date,
			default: Date.now,
		},
		lastUpdate: {
			type: Date,
			default: Date.modifiedDate,
		},
	},
	{
		timestamps: {
			createdAt: "create_at",
		},
	}
);
