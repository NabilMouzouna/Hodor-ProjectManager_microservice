import express, { Express, Request, Response } from 'express';
import projectsRoute from "./routes/projects"
import {  config  } from 'dotenv';
import connectDB from './libs/connectDB';
const app: Express = express();
config()
const PORT = process.env.PORT || 6001;

app.use(express.json())
app.use("/projects", projectsRoute)
app.get('/', (req: Request, res: Response) => {
  res.send("Nuble Project Management");
});

app.listen(PORT, () => {
    const message = [`\n\t✅\u001b[1m Server is Running at\u001b[0m`,`\x1b[34mhttp://localhost:${PORT}\x1b[0m\n`];
    connectDB()
  console.log(...message);
});