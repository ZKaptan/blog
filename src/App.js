import { Box, ChakraProvider, Switch } from "@chakra-ui/react";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutScreen from "./screens/AboutScreen";
import ArticleScreen from "./screens/ArticleScreen";
import BlogScreen from "./screens/BlogScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
	return (
		<>
			<ChakraProvider>
				<BrowserRouter>
					<Header />
					<Box as={"main"} minHeight={"78vh"}>
						<Routes>
							<Route path="/" element={<HomeScreen />} exact />
							<Route path="/contact" element={<ContactScreen />} />
							<Route path="/about" element={<AboutScreen />} />
							<Route path="/blogposts/:id" element={<BlogScreen />} />
							<Route
								path="/blogposts/:id/:articleId"
								element={<ArticleScreen />}
							/>
						</Routes>
					</Box>

					<Footer />
				</BrowserRouter>
			</ChakraProvider>
		</>
	);
};

export default App;
