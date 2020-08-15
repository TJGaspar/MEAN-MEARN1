import {
	addNewProduct,
	getProduct,
	getProductWithID,
	updateProduct,
	deleteProduct,
	decreaseStock,
} from "../controllers/stockController";

import {
	getLevel,	
} from "../controllers/stockLevelInfoController"

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
		//.get(getProductWithID) 
		.get(getLevel)
		//.put(updateProduct)
		//.delete(deleteProduct);
		.post (decreaseStock)
};

export default routes;
