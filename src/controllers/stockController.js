import mongoose from "mongoose";
import { StockSchema } from "../models/stockModel";

const Product = mongoose.model("Stock", StockSchema);

export const addNewProduct = (req, res) => {
	let newProduct = new Product(req.body);
	newProduct.save((err, product) => {
		if (err) {
			console.log(err);
			res.send(err);

			// res.json({
			// productName: "" + newProduct.productName,
			// errorCode: "" + err.code,
			// errorMessage: "" + err,
			// });
		} else
			res.json({
				product,
				message: `${req.body.productName} was successfuly created`,
			});
	});
};

export const getProduct = (req, res) => {
	Product.find({}, (err, product) => {
		if (err) {
			res.send(err);
		}
		res.json(product);
	});
};

export const getProductWithID = (req, res) => {
	Product.findById(req.params.productID, (err, product) => {
		if (err) {
			res.send(err);
		}
		res.json(product);
	});
};

export const updateProduct = (req, res) => {
	Product.findOneAndUpdate(
		{ productName: req.params.productName },
		req.body,
		{ new: true, useFindAndModify: false },
		(err, product) => {
			if (err) {
				res.send(err);
			}
			res.json({ product, message: `${req.params.productName} was updated` });
		}
	);
};

export const deleteProduct = (req, res) => {
	Product.remove({ productName: req.params.productName }, (err, product) => {
		if (err) {
			res.send(err);
		}
		res.json({ message: `Product ${req.params.productName} was deleted` });
	});
};
