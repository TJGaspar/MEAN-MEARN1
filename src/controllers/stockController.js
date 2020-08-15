import mongoose from "mongoose";
import { StockSchema } from "../models/stockModel";

const Product = mongoose.model("Stock", StockSchema);

export const addNewProduct = (req, res) => {
	let newProduct = new Product(req.body);
	newProduct.save((err, product) => {
		if (err) {
			console.log(err);
			res.send(err);
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

// export const deleteProduct = (req, res) => {
// 	Product.remove({ productName: req.params.productName }, (err, product) => {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json({ message: `Product ${req.params.productName} was deleted` });
// 	});
// };

export const decreaseStock = (req, res) => {
	Product.findOne(
		{ productName: req.params.productName }, //variável no url

		(err, product) => {
			if (err) {
				res.send(err);
			}
			let bdQty = product.quantity; // Quantidade na bd
			let newQty = req.body.quantity; //quantidade no campo

			let result = bdQty - newQty;
			product.quantity = result;
			if (result < 0)
				res.json({
					message: `${product.productName} can only decrease ${newQty} items`,
				});
			else
				product.save((err, product) => {
					//saves the product with the new quantity
					if (err) {
						console.log(err);
						res.send(err);
					}
					res.json({
						product,
						message: `${product.productName} was successfuly decreased to ${result}`,
					});
				});
		}
	);
};
