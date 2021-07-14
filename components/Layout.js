import React from "react";
import Head from "next/head";
import Nav from "./nav";

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div>{children}</div>
		</>
	);
};

export default Layout;
