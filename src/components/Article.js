import {
	Heading,
	Box,
	Center,
	Image,
	Text,
	Stack,
	Button,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";

const Post = ({ title, description, articleId }) => {
	const { id } = useParams();
	return (
		<Center py={6}>
			<Box
				maxW={"270px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"2xl"}
				rounded={"md"}
				overflow={"hidden"}
			>
				<Image
					h={"150px"}
					w={"full"}
					src={
						"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/1200px-Binary_tree.svg.png"
					}
					objectFit={"contain"}
				/>

				<Box p={6}>
					<Stack spacing={0} align={"center"} mb={5}>
						<Heading
							textAlign={"center"}
							fontSize={"2xl"}
							fontWeight={500}
							fontFamily={"body"}
						>
							{title}
						</Heading>
					</Stack>

					<Box textAlign={"center"}>
						<Text>{description} </Text>
					</Box>

					<Button
						w={"full"}
						mt={8}
						bg={useColorModeValue("#151f21", "gray.900")}
						color={"white"}
						rounded={"md"}
						_hover={{
							boxShadow: "lg",
						}}
					>
						<Link to={`/blogposts/${id}/${articleId}`}>Read More</Link>
					</Button>
				</Box>
			</Box>
		</Center>
	);
};

export default Post;
