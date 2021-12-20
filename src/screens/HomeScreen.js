import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";
import Post from "../components/Blog";

const HomeScreen = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch("/api/blogposts");
			const jsonData = await data.json();
			setBlogs(jsonData);
		};
		fetchData();
	}, []);
	return (
		<>
			<Heading m="25px" as="h2" size="lg">
				Latests Posts
			</Heading>
			<Container maxW="65%">
				{blogs.map((blog) => (
					<Blog
						key={blog.id}
						id={blog.id}
						topic={blog.topic}
						topicDescription={blog.topicDescription}
					/>
				))}
			</Container>
		</>
	);
};

export default HomeScreen;
