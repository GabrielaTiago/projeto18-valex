import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const server = express();

server.use(cors(), json());


const PORT: number = Number(process.env.PORT);

server.listen(PORT, () => {console.log(`The server is runnig on port ${PORT}`)});