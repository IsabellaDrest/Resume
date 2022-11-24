import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';



export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
    this.state = {
      user: localStorage.getItem("user")
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm" light>
          <Container className="nav-container">
            <NavbarBrand tag={Link} to="/">Isabella Drest Rasmussen</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink onClick={this.toggleNavbar} tag={Link} className="nav-text" to="/aboutme">About Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.toggleNavbar} tag={Link} className="nav-text" to="/education">Education</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.toggleNavbar} tag={Link} className="nav-text" to="/work">Work</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.toggleNavbar} tag={Link} className="nav-text" to="/skills">Skills</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

