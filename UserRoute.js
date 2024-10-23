import express from "express";
import { fetch, create} from "../Controler/UserControler.js";

const Route = express.Router();

Route.post("/create", create)
Route.get('/fetch',fetch);

export default Route;