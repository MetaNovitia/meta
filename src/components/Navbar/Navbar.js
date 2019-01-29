import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
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
      <Navbar className="nav" dark expand="md">
          <NavbarBrand tag={Link} to="/"
            style={
              {
                color: this.props.f
              }
            }
          >MN</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink  tag={Link} 
                          to="/About"
                          style={
                            {
                              color: this.props.f
                            }
                          }
                >About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/"
                    style={
                      {
                        color: this.props.f
                      }
                    }
                >Connect</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default Navigation;

