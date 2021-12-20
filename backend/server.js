const express = require("express");
const mongoose = require("mongoose");
const blogs = require("./data/blogs");

const app = express();

app.get("/", (req, res) => {
	res.send("API Running");
});

app.get("/api/blogposts", (req, res) => {
	res.json(blogs);
});

app.get("/api/blogposts/:id", (req, res) => {
	const blog = blogs.find((b) => b.id === req.params.id);
	res.json(blog);
});

app.get("/api/blogposts/:id/:articleId", (req, res) => {
	const { id, articleId } = req.params;
	console.log(req.params);
	const blog = blogs.find((b) => b.id === id);
	// const article = blog.articles.find((a) => a.articleId === articleId);
	// res.json(article);
	let x = 24;
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server listing on port ${PORT}`);
});
