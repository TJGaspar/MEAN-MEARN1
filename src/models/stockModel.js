import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const StockSchema = new Schema(
	{
		productName: {
			type: String,
			required: "enter the product name",
			uppercase: true,
			unique: true,
		},
		quantity: {
			type: Number,
			required: "enter the quantity",
		},
		creationDate: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: {
			createdAt: "create_at",
		},
	}
);
