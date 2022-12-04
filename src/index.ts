import express from "express";
import "dotenv-safe/config";
import "express-async-errors";
// import cors from "cors";
import session from "express-session";
import userRoutes from "./routes/users";
import productRoutes from "./routes/products";
import { errorHandler } from "./middleware/error-handler";

const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );
app.use(express.json());

app.use(
  session({
    name: "qid",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365, //1 year
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: "lax", //lax
      // domain: __prod__ ? ".next-journey.xyz" : undefined,
    },
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(userRoutes);
app.use(productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
