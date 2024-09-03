import "dotenv/config";
import express from "express";
import path from "path";
import session from "express-session";

import router from "./router/index.routes.js";

const app = express();

const PORT = process.env.LOCAL_PORT;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

app.use("/css", express.static(path.join(process.cwd(), "public/css")));
app.use("/img", express.static(path.join(process.cwd(), "public/img")));

app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUnitialized: false,
    cookie: { secure : false, httpOnly : true, maxAge : 36000000 },
}))

app.use((req, res, next) => {
    console.log(req.session);
    const username = req.session.isLogged ? req.session.user.username : null ;
    res.locals.username = username;
    res.locals.isLogged = req.session.isLogged;
    next();
})

app.use(router);

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));