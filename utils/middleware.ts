import morgan from 'morgan';
import { Request, Response, NextFunction } from "express";

// export const unknownEndpoint = (req: Request, res: Response, next: NextFunction) => {
//   res
//     .status(404)
//     .send({ error: "unknown endpoint" })
//     .catch((err) => next(err));
// };

// export const errorHandler = (err, req, res, next) => {
//   console.error(err.message);

//   if (err.name === "CastError") {
//     return res.status(400).send({ error: "malformatted id" });
//   }
//   if (err.name === "ValidationError") {
//     return res.status(400).json({ error: err.message });
//   }

//   return next(err);
// };

// morgan.token("data", (request) =>
//   request.method === "POST" ? JSON.stringify(request.body) : ""
// );

export const requestLogger = morgan(
  ":method :url :status :res[content-length] - :response-time ms :data"
);
