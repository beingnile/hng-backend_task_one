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

const operation = {
  add: "addition",
  minus: "subtraction",
  mult: "multiplication",
};

interface ret {
  slackUsername: string;
  operation_type: string;
  result: number;
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

app.post("/do-math", (req: Request, res: Response) => {
  let op: string = "";
  if (req.body.operation_type !== undefined) {
    op = req.body.operation_type;
  }
  const x: number = req.body.x;
  const y: number = req.body.y;
  let result = 0;
  if (op === operation.add) {
    result = x + y;
  } else if (op === operation.minus) {
    result = x - y;
  } else if (op === operation.mult) {
    result = x * y;
  }

  const myReturn: ret = {
    slackUsername: "beingnile",
    operation_type: op,
    result: result,
  };

  res.json(myReturn);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
