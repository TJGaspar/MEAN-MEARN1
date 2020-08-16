import {
	addNewProduct,
	getProduct,
	decreaseStock,
	getLevel,
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
		.get(getLevel)
		.post(decreaseStock);
};

export default routes;
