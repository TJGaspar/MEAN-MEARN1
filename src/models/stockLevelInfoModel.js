import mongoose from "mongoose";
import { Long } from "mongodb";

const Schema = mongoose.Schema;

export const StockLevelInfoSchema = new Schema({
	productName: {
		type: String,
		required: "product name",
	},
	stockLevelAvailability: {
		type: String,
		required: "available stock",
	},
	lastUpdate: {
		type: Date,
		required: "last update",
	},
});
