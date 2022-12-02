import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  console.log("Error: ", err);

  return res
    .status(500)
    .json({ errors: [{ message: "Something went wrong" }] });
};
