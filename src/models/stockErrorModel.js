import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const StockErrorSchema = new Schema({
	productName: {
		type: String,
	},
	errorCode: {
		type: String,
	},
	errorMessage: {
		type: String,
	},
});