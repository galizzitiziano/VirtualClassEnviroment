import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../css/main.css'
import Button from 'react-bootstrap/Button';
import {Link,Outlet } from "react-router-dom";

function Nav(props: { name: string, rol: unknown }): any {
    return (<>
        <header className='header'>
            <div id="container">
                <div className="header-container">
                    <div className="header-logo_container">
                        <img src="" alt="logo" />
                    </div>
                    <div className="header-userSettings_container">
                        {props.rol != undefined ?
                            <DropdownButton
                                as={ButtonGroup}
                                key={"info"}
                                variant={"info"}
                                title={props.name}
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                    Active Item
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownButton>
                            :
                            <Button variant="outline-info">Iniciar Sesión</Button>
                        }
                    </div>
                </div>
            </div>
        </header>



    </>)
}
export function Footer() {
    return (<>
        <footer className='footer'>
            <div id="container">
                <div className="footer">
                    <div className="footer-container">
                        contenido de footer
                    </div>
                </div>
            </div>
        </footer>

    </>)
}
export function Aside(props: { rol: unknown }) {
    return (<>
        <aside>
            <nav>
                <ul>
                    <li>Area personal(link)</li>
                    <li>Pagina principal del sitio(link)</li>
                    <Dropdown className="d-inline mx-2" autoClose={false}>
                        <Dropdown.Toggle id="dropdown-autoclose-false">
                            Mis cursos
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Curso 1</Dropdown.Item>
                            <Dropdown.Item href="#">Curso 2</Dropdown.Item>
                            <Dropdown.Item href="#">Curso 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </nav>
        </aside>
        <Outlet/>
    </>)
}
export function Home(props: {rol:unknown}){
    return(<>
    
    
    </>)
}
export function Pag1(){
    return(<>
        <h1>Esto es Pagina 1</h1>
    </>)
}
export function Pag2(){
    return(<>
    <h1>Esto es Pagina 2</h1>
    </>)
}
export default Nav;