import {
	addNewProduct,
	getProduct,
	getProductWithID,
	updateProduct,
	deleteProduct,
} from "../controllers/stockController";

const routes = (app) => {
	app
		.route("/stock")
		.get((req, res, next) => {
			//middleware
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Request type: ${req.method}`);
			next();
		}, getProduct)
		.post(addNewProduct);

	app
		.route("/stock/:productName")
		.get(getProductWithID)
		.put(updateProduct)
		.delete(deleteProduct);
};

export default routes;
