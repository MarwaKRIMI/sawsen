import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div >
        <Navbar color="warning" light expand="md"  >
          <NavbarBrand href="/home-admin"  style={{color:'white',fontWeight:'bold',fontSize:'25px',marginRight:'15px'}}><strong>Maison</strong>Jeunes</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar >
            <NavItem>
                <NavLink href='/home-admin'  style={{color:'white',fontSize:'18px',fontWeight:'bold',marginRight:'15px'}}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#propos'  style={{color:'white',fontWeight:'bold',fontSize:'18px',marginRight:'15px'}}>A propos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#evenement"  style={{color:'white',fontWeight:'bold',fontSize:'18px',marginRight:'15px'}}>Evenements</NavLink>
              </NavItem>

                    <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret  style={{color:'white',fontWeight:'bold',fontSize:'18px',marginRight:'15px'}} >
                  Adherations
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/demandes-adhesions' >
                  Voir les demandes d'adhérations
                  </DropdownItem>
               
                 
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#galery"  style={{color:'white',fontWeight:'bold',fontSize:'18px',marginRight:'15px'}}>Galery</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret href='#club'  style={{color:'white',fontWeight:'bold',fontSize:'18px',marginRight:'15px'}}>
                  Messages
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/envoyer-messages' >
                  Envoyer des messages
                  </DropdownItem>
               
                 
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href='/list-inscrit'  style={{color:'white',fontWeight:'bold',fontSize:'18px',marginRight:'15px'}}>Inscrits</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret   style={{color:'white',fontWeight:'bold',fontSize:'18px',marginRight:'15px'}}>
                  Clubs
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem  href='#club'>
                   Liste des clubs
                  </DropdownItem>
                  <DropdownItem  href='/ajouter-club'>
                   Ajouter un club
                  </DropdownItem>
                  <DropdownItem href='/modifier-club'>
                    Modifier un club
                  </DropdownItem>
                 
              
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}