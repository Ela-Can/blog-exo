import express from "express";
import pool from "../config/db.js";
import { add_story, home, story_id } from "../controller/view.js";

const router = express.Router();

router.get("/", home );

router.get("/story/:id", story_id);

router.get("/Admin", add_story);

router.post("/admin/story/create", (req, res) => {
    const q = `
    INSERT INTO story (title, content, publish_date, img, category_id)
    VALUES (?, ?, NOW(), ?, ?)
    `;
    pool.execute(q, [
        req.body.title,
        req.body.content,
        req.body.img,
        req.body.category_id
    ])
        .then(() => {
            res.redirect("/admin/story")
        })
        .catch((error) => console.log(error))
})

export default router;