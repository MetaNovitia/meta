import React, { Component } from 'react';
import './Navbar.css';
import { NavbarBrand, Navbar, Nav, NavItem, NavLink, Collapse, NavbarToggler} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    this.home = "navlink";
    this.topics = "navlink";
    this.problems = "navlink";

    if(props.open === "home"){
      this.home = "open";
    }else if(props.open === "topics"){
      this.topics = "open";
    }else if(props.open === "problems"){
      this.problems = "open";
    }
    

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="nav" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default Navigation;

