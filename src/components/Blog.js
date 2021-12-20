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
import { Link } from "react-router-dom";

const Blog = ({ id, topicDescription, topic }) => {
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
						"https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
					}
					objectFit={"cover"}
				/>

				<Box p={6}>
					<Stack spacing={0} align={"center"} mb={5}>
						<Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
							{topic}
						</Heading>
					</Stack>

					<Box textAlign={"center"}>
						<Text>{topicDescription} </Text>
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
						<Link to={`/blogposts/${id}`}>Read Posts</Link>
					</Button>
				</Box>
			</Box>
		</Center>
	);
};

export default Blog;
