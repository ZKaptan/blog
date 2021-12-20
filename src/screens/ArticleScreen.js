import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, navita, useNavigate, useParams } from "react-router-dom";

const ArticleScreen = () => {
	const [article, setArticle] = useState({});
	const { blogId, articleId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(`/api/blogposts/${blogId}/${articleId}`);
			const jsonData = await data.json();
			console.log(jsonData);
			setArticle(jsonData);
		};
		fetchData();
	}, [articleId, blogId]);
	const navigate = useNavigate();
	return (
		<Box m="25">
			<Text
				style={{ fontSize: "25px", textDecoration: "underline" }}
				onClick={() => navigate(-1)}
			>
				Go Back
			</Text>

			<Container>
				<Heading textAlign="center" size="xl" mb="12">
					Binary Tree Traverals
				</Heading>
				Unlike linear data structures (Array, Linked List, Queues, Stacks, etc)
				which have only one logical way to traverse them, trees can be traversed
				in different ways. Following are the generally used ways for traversing
				trees.
				<br />
				<br />
				Depth First Traversals: (a) Inorder (Left, Root, Right) : 4 2 5 1 3 (b)
				Preorder (Root, Left, Right) : 1 2 4 5 3 (c) Postorder (Left, Right,
				Root) : 4 5 2 3 1 Breadth-First or Level Order Traversal: 1 2 3 4 5
				Please see this post for Breadth-First Traversal.
			</Container>
		</Box>
	);
};

export default ArticleScreen;
