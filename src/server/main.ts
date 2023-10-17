import express from "express";
import ViteExpress from "vite-express";
import { customAlphabet } from "nanoid";

/**
 * Express app instance
 */
const app = express();

/**
 * Route handler for /hello endpoint
 * @param _ - Express request object
 * @param res - Express response object
 */
app.get("/hello", (_, res) => {
	res.send("Hello Vite + React + TypeSacript!");
});

/**
 * Start the server and listen on port 3000
 */
ViteExpress.listen(app, 3000, () =>
	console.log("Server is listening on http://localhost:3000...")
);
