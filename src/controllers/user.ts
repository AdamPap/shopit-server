import * as argon2 from "argon2";
import { Request, Response } from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/User";
import { BadRequestError } from "../errors/bad-request-error";

const userRepository = AppDataSource.getRepository(User);

export const register = async (req: Request, res: Response) => {
  const userInput = req.body;
  const hashedPassword = await argon2.hash(userInput.password);

  const user = userRepository.create({
    email: userInput.email,
    password: hashedPassword,
    username: userInput.username,
    name: userInput.name,
    surname: userInput.surname,
  });

  await userRepository.save(user);

  req.session.userId = user.id;

  const { password, ...partialUser } = user;

  res.json(partialUser);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new BadRequestError("Invalid credentials.");
  }

  const isValidPassword = await argon2.verify(user.password, password);

  if (!isValidPassword) {
    throw new BadRequestError("Invalid credentials.");
  }

  req.session.userId = user.id;

  const { password: pass, ...partialUser } = user;

  res.status(200).json(partialUser);
};

export const logout = async (req: Request, res: Response) => {
  req.session.destroy((err) => {
    res.clearCookie("qid", { sameSite: "lax" });

    if (err) {
      throw new BadRequestError("Error on logout");
    }
    res.status(200).json(true);
  });
};

export const currentUser = async (req: Request, res: Response) => {
  if (!req.session.userId) {
    return res.json(null);
  }

  const foundUser = await userRepository.findOneBy({ id: req.session.userId });

  if (!foundUser) {
    return res.json(null);
  }

  const { password, ...user } = foundUser;
  return res.json(user);
};
