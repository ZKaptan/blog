import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Article from "../components/Article";

const BlogScreen = ({ match }) => {
	const [articles, setArticles] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(`/api/blogposts/${id}`);
			const jsonData = await data.json();
			setArticles(jsonData.articles);
		};
		fetchData();
	}, [id]);
	return (
		<Box m="25px">
			<Link style={{ fontSize: "25px", textDecoration: "underline" }} to="/">
				Go Back
			</Link>
			{articles.map((article) => (
				<Article
					title={article.title}
					description={article.description}
					key={article.articleId}
					articleId={article.articleId}
					text={article.text}
				/>
			))}
		</Box>
	);
};

export default BlogScreen;
