
import './App.css';
import NavBar from './MisComponentes/NavBar';
import TableDenuncias from './MisComponentes/TableDenuncias';
import SoyelMapa from './MisComponentes/Maps2';
import 'bootstrap/dist/css/bootstrap.min.css';


 /*
<Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Mar del Bache</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Ingresar Calle</Button>
            </Form>
          </Navbar.Collapse>
       </Navbar>
       */
 

function App() {
  return (
    <div className="App">
       <NavBar/>
       
      <header className="App-header">
        <p>hola</p>
        
        <div className="mapa">
            <SoyelMapa/>
          
        </div>
        
        <br/>
        <div className="tablaDenuncias">
            <h1>Baches encontrados</h1>
            <TableDenuncias/>
        </div>
        <br></br>
            
      </header>
   </div>
  );
}

export default App;
