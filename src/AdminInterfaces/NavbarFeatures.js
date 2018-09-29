import React, { Component } from 'react';
import { Navbar,Nav, NavbarBrand, NavbarNav,UncontrolledDropdown, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import {Link} from 'react-router-dom'

import { Container, Row, Col, Input} from 'mdbreact';

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            

        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            
                <Navbar color="blue" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Maison</strong>Jeunes
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="#">Home</NavLink>
                          </NavItem>
                          
                          <NavItem>
                              <NavLink to="/envoyer-message"  id="Popover1" onClick={this.toggle}>Envoyer des messages</NavLink>
                              <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
     
        </Popover>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/evenement">Evenements</NavLink>
                          </NavItem>
                        
                          <Link to="/demandes-adhesions">Demandes d'adhésions</Link>
                         
                          <NavItem>
                          <NavLink to="#club">Clubs</NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink href="/ajouter-club">Ajouter des clubs</NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink to="/list-inscrits">Liste des inscrits</NavLink>
                          </NavItem>
                          <NavItem>
                          <Link to="#galery"><NavLink to="#" >Galerie</NavLink></Link>
                          </NavItem>
                          
                        </NavbarNav>
                        <NavbarNav right>
                        
                        </NavbarNav>
                    </Collapse>
                  
         
              
                </Navbar>
          
        );
    }
}
export default NavbarFeatures