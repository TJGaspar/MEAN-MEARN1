import mongoose from "mongoose";
import { StockSchema } from "../models/stockModel";
import { StockErrorSchema } from "../models/stockErrorModel";
import { StockLevelInfoSchema } from "../models/stockLevelInfoModel";

const Product = mongoose.model("Stock", StockSchema);
const Level = mongoose.model("StockLevelInfo", StockLevelInfoSchema);
const Errors = mongoose.model("Error", StockErrorSchema);

//Adds a new product
export const addNewProduct = (req, res) => {
	let newProduct = new Product(req.body);
	newProduct.save((err, product) => {
		//{ productName: req.params.productName }
		if (err) {
			let CreateNewError = CreateErrors(err, req.body.productName);
			res.send(CreateNewError);
		} else
			res.json({
				product,
				message: `${req.body.productName} was successfuly created`,
			});
	});
};

//Gets products in the DB
export const getProduct = (req, res) => {
	Product.find({}, (err, product) => {
		if (err) {
			console.log(`ESTE ERRO ${req.body.productName}`);
			let CreateNewError = CreateErrors(err, undefined);

			res.send(CreateNewError);
		}
		res.json(product);
	});
};

//Decrements the stock
export const decreaseStock = (req, res) => {
	Product.findOne(
		{ productName: req.params.productName }, //variável no url

		(err, product) => {
			if (err || !product || req.body.quantity < 0) {
				let CreateNewError = CreateErrors(err, req.body.productName);

				console.log(err);
				res.send(CreateNewError);
			} else {
				let bdQty = product.quantity; // Quantidade na bd
				let newQty = req.body.quantity; //quantidade no campo
				let result = bdQty - newQty;
				product.quantity = result;
				if (result < 0) {
					console.log(`ESTE ERRO ${req.body.productName}`);
					let CreateNewError = CreateErrors(err, req.body.productName);
					res.json({
						CreateNewError,
						message: `${product.productName} can only decrease ${bdQty} items`,
					});
				} else
					product.save((err, product) => {
						//saves the product with the new quantity
						if (err) {
							let CreateNewError = CreateErrors(err, req.body.productName);
							CreateNewError;
							console.log(err);
							res.send(CreateNewError);
						} else
							res.json({
								product,
								message: `${product.productName} was successfuly decreased to ${result}`,
							});
					});
			}
		}
	);
};

export const getLevel = (req, res) => {
	Product.findOne(
		{ productName: req.params.productName }, //variável no url

		(err, product) => {
			if (err || !product) {
				let CreateNewError = CreateErrors(err, req.body.productName);

				res.json(CreateNewError);
			} else {
				console.log("caiu aqui!!!!!!2");
				var x = translateStock(product.quantity);
				let stockLevel = new Level();
				stockLevel.productName = product.productName;
				stockLevel.stockLevelAvailability = translateStock(product.quantity);
				stockLevel.lastUpdate = product.updatedAt;

				res.json(stockLevel);
			}
		}
	);
};

//translate stock to String
function translateStock(stock) {
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

//Create Errors
function CreateErrors(err, name) {
	var NewError = new Errors(err, name);

	NewError.productName = name;

	NewError.errorCode = 400;
	NewError.errorMessage = "BAD REQUEST";
	console.log(`An Error occured : ${NewError}`);

	return NewError;
}

// export const getProductWithID = (req, res) => {
// 	Product.findById(req.params.productID, (err, product) => {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json(product);
// 	});
// };

// export const updateProduct = (req, res) => {
// 	Product.findOneAndUpdate(
// 		{ productName: req.params.productName },
// 		req.body,
// 		{ new: true, useFindAndModify: false },
// 		(err, product) => {
// 			if (err) {
// 				res.send(err);
// 			}
// 			res.json({ product, message: `${req.params.productName} was updated` });
// 		}
// 	);
// };

// export const deleteProduct = (req, res) => {
// 	Product.remove({ productName: req.params.productName }, (err, product) => {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json({ message: `Product ${req.params.productName} was deleted` });
// 	});
// };
