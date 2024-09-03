import pool from "../config/db.js";

const admin_home = (req, res) => {
    res.render("admin/home");
}

const add_story = (req, res) => {
    res.render("admin/story/create");
}

export { admin_home, add_story };