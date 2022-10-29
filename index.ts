import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

interface message {
  slackUsername: string;
  backend: boolean;
  age: number;
  bio: string;
}

const myMessage: message = {
  slackUsername: "beingnile",
  backend: true,
  age: 21,
  bio: "Hi, Nice to meet you!!!, my name is Nile and I build cool stuff for software backend. On the side, I make music and enjoy chess",
};

app.get("/", (_req: Request, res: Response) => {
  res.json(myMessage);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
