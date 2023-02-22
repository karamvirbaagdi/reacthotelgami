import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Hotel Gami</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>

              <NavDropdown title="Users" id="basic-nav-dropdown">
                <NavDropdown.Item href="/add-user">Add User</NavDropdown.Item>
                <NavDropdown.Item href="/list-user">List User</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tags" id="basic-nav-dropdown">
                <NavDropdown.Item href="/add-tag">Add Tags</NavDropdown.Item>
                <NavDropdown.Item href="/list-tag">List Tags</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="/add-category">
                  Add Category
                </NavDropdown.Item>
                <NavDropdown.Item href="/list-categories">
                  List Categories
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="/add-product">
                  Add Product
                </NavDropdown.Item>
                <NavDropdown.Item href="/list-product">
                  List Product
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
