import { Request, Response } from "express";
import AppDataSource from "../config/data-source";
import { Product } from "../entities/Product";

const productRepository = AppDataSource.getRepository(Product);

export const getAllProducts = async (_: Request, res: Response) => {
  const products = await productRepository.find();

  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const userInput = req.body;

  console.log(userInput);

  const createdProduct = productRepository.create({ ...userInput });

  res.status(201).json(createdProduct);
};

export const getOneProduct = async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);

  const foundProduct = productRepository.findOne({
    where: {
      id: productId,
    },
  });

  console.log(foundProduct);

  res.json(foundProduct);
};

export const updateProduct = async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);

  const userInput = req.body;

  const updatedProduct = await productRepository.update(productId, {
    ...userInput,
  });

  res.json(updatedProduct);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);

  await productRepository.delete({
    id: productId,
  });

  res.json({ deleted: true });
};
