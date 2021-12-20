import { Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Box
			ml={""}
			as={"footer"}
			display={"flex"}
			justifyContent={"center"}
			padding={"20px"}
		>
			Deniz Kaptan &copy; All Rights Reserved
		</Box>
	);
};

export default Footer;
