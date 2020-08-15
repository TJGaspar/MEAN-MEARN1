import mongoose from "mongoose";
import { StockSchema } from "../models/stockModel";
import { StockLevelInfoSchema } from "../models/stockLevelInfoModel";

const Level = mongoose.model("StockLevelInfo", StockLevelInfoSchema);
const Product = mongoose.model("Stock", StockSchema);

export const getLevel = (req, res) => {
	Product.findOne(
		{ productName: req.params.productName }, //variável no url

		(err, product) => {
			if (err) {
				res.send(err);
			}

			// this.productName = product.productName;
			// this.StockLevelAvailability= product.quantity;
			// this.lastUpdate =
			var x = translateStock(product.quantity);
			console.log("este é o valor do stock!!! " + product.quantity);
			console.log("este é o valor do stock!!!2 " + x);
			let stockLevel = new Level();
			stockLevel.productName = product.productName;
			stockLevel.stockLevelAvailability = translateStock(product.quantity);
			stockLevel.lastUpdate = product.updatedAt;

			res.json(stockLevel);
		}
	);
};

function translateStock(stock) {
   
    	// if (stock == 0)
		// 	return "OUT";
		// if (stock <= 5)
		// 	return "LOW";
		// if (stock <= 15)
		// 	return "MEDIUM";
		// if (stock > 15)
		// 	return "HIGH";

	switch (true) {
		case stock == 0:
			return "OUT";
		case stock <= 5:
			return "LOW";
		case stock <= 15:
			return "MEDIUM";
		case stock > 15:
			return "HIGH";
	}
}
