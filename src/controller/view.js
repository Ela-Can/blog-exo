import pool from "../config/db.js";

const home = (req, res) => {
    const q = "SELECT * FROM story"
    pool.query(q)
        .then(([datas]) => {
            res.render("home", {datas});
        })
}

const story_id = (req, res) => {
    console.log(req.params);
    const q = "SELECT * FROM story WHERE id = ?";
    pool.execute(q, [req.params.id])
        .then(([[data]]) => {
            console.log(data.title);
            res.render("story", { data });
        })
        .catch(error => console.log(error));
}

const admin_home = (req, res) => {
    res.render("admin/home");
}

const add_story = (req, res) => {
    res.render("admin/story/create");
}

export { home, story_id, admin_home, add_story };