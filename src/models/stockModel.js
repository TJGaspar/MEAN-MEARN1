import mongoose from "mongoose";
//import mongoose-long from "mongoose";

const Schema = mongoose.Schema;

export const StockSchema = new Schema(
	{
		productName: {
			type: String,
			required: "enter the product name",
			lowercase: true,
			unique: true,
		},
		quantity: {
			type: Number,
			required: "enter the quantity",
			validate:  Number.isInteger,
		},

	},
	{
		timestamps: true,
		versionKey: false,
	}
);
