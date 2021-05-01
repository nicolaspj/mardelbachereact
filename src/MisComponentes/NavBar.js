import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Button , Nav ,NavDropdown, Form   } from 'react-bootstrap';
//import PlacesAutocomplete, {geocodeByAddress,getLatLng,} from 'react-places-autocomplete';
import Autocomplete from '/react-google-autocomplete';
 

class NavBar extends Component {


render(){
  return (                                                                                                                                             
                              <Navbar bg="light" expand="lg">
                              <Navbar.Brand href="#home">Mar del Bache</Navbar.Brand>
                              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                              <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="mr-auto">
                              <Nav.Link href="#home">Home</Nav.Link>
                              <Nav.Link href="#link">Link</Nav.Link>
                             
                              </Nav>
                              <Form inline>
                              <Autocomplete
                                style={{width: '90%'}}
                                  onPlaceSelected={(place) => {
                                    console.log(place);
                                  }}
                                  types={['(regions)']}
                                  componentRestrictions={{country: "ru"}}
                                  /> 
                              </Form>
                              </Navbar.Collapse>
                              </Navbar>
                              
                              
                              
                            )
               }
}

export default NavBar;
