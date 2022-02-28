import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
    return (
        <div className="container">
            <Navbar dark color="dark">
                <NavbarBrand href="/">My Resturant</NavbarBrand>
            </Navbar>

        </div>


    );
}

export default Navigation;