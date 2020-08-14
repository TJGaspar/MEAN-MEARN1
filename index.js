import express from "express";
import routes from "./src/routes/stockRoutes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
const PORT = 4000;

//mongoose connection (connection between mongo and the API)
mongoose.Promise; //I'll wait for a response from Mongo
mongoose.connect("mongodb://localhost/PROJdb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

//Bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) =>
	res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
