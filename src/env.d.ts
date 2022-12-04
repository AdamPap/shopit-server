declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    SESSION_SECRET: string;
    DB_NAME: string;
    DB_PASSWORD: string;
  }
}