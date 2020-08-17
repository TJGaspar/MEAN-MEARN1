import express from "express";
import routes from "./src/routes/stockRoutes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
const options = { autoIndex: true }; //allowed unique productName

//mongoose connection (connection between mongo and the API)
mongoose.Promise = global.Promise; //Waits for a response from Mongo
mongoose.connect("mongodb://localhost/PROJdb", {
	//The db used for this API
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) =>
	res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
//done
