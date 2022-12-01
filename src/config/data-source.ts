import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "adam",
  password: "Giadbcloud18!",
  database: "eshop-cloud-db",
  logging: true,
  synchronize: true,
  entities: ["dist/entities/*.js"],
  migrations: ["dist/migrations/*.js"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
