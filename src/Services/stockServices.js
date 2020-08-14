
import mongoose from "mongoose";
import { StockSchema } from "../models/stocktModel";


class checkName{
 checkName (name, StockLevel){
     
 }

}
export const checkId = ( res) => {
	Product.findOneAndUpdate(
		{ productName: req.params.productID },
		req.body,
		{ new: true, useFindAndModify: false },
		(err, product) => {
			if (err) {
				res.send(err);
			}
			res.json({ product, message: `${req.params.productID} was updated` });
		}
	);
};