import "dotenv/config";
import express from "express";
import path from "path";

import router from "./router/index.routes.js";
import pool from "./config/db.js"

const app = express();

const PORT = process.env.LOCAL_PORT;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

app.use("/css", express.static(path.join(process.cwd(), "public/css")));
app.use("/img", express.static(path.join(process.cwd(), "public/img")));

app.use(router);

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));