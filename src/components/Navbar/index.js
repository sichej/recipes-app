import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/home" activeStyle>
			Home
		</NavLink>
		<NavLink to="/addRecipe" activeStyle>
			Add Recipe
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
