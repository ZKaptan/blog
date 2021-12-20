import React from "react";
import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import dk from "../images/dk.png";
import { Link } from "react-router-dom";

const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleToggle = () => (isOpen ? onClose() : onOpen());
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			padding="6"
			bg="orange.400"
			color="white"
		>
			<Flex align="center" mr={5}>
				<Heading as="h1" size="lg" letterSpacing={"tighter"}>
					<Image src={dk} boxSize={"80px"} borderRadius={"50"} />
				</Heading>
			</Flex>
			<Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
				<HamburgerIcon />
			</Box>
			<Stack
				direction={{ base: "column", md: "row" }}
				display={{ base: isOpen ? "block" : "none", md: "flex" }}
				width={{ base: "full", md: "auto" }}
				alignItems={"center"}
				justifyContent={"center"}
				flexGrow={1}
				mt={{ base: 4, md: 0 }}
			>
				<Text fontWeight={"extrabold"} fontSize={18} mr={5}>
					Deniz's Tech Blog
				</Text>
				<Link style={{ display: "block" }} to="/">
					Home
				</Link>
				<Link to="/about" style={{ display: "block" }}>
					About Me
				</Link>
				<Link to="/contact" style={{ display: "block" }}>
					Contact Me
				</Link>
			</Stack>
			<Box
				display={{ base: isOpen ? "block" : "none", md: "block" }}
				mt={{ base: 4, md: 0 }}
			>
				<Button
					as="button"
					variant="outline"
					_hover={{ bg: "orange.700", borderColor: "orange.700" }}
					mr={2}
				>
					Register
				</Button>
				<Button
					as="button"
					variant="outline"
					_hover={{ bg: "orange.700", borderColor: "orange.700" }}
				>
					Login
				</Button>
			</Box>
		</Flex>
	);
};

export default Header;
