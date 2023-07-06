import { Link } from "react-router-dom"
// import logo from "../imgs/logo.svg"

function Navbar() {
    // useExternalScripts("../")
    return (
        <div>
            <header>
                <nav className="navbar">
                    <Link to="#" className="logo">XPTO</Link>
                    <ul className="nav-menu">
                        <li className="nav-itens"><Link to='/' className="nav-link">Home Page Novo</Link></li>
                        <li className="nav-itens"><Link to='/produtos' className="nav-link">Produtos</Link></li>
                        <li className="nav-itens"><Link to='/detail' className="nav-link">Detalhes do Produto</Link></li>
                    </ul>
                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </header>

            {/* <nav>
                <Link to='/'>Home Page Novo</Link>
                <Link to='/produtos'>Produtos</Link>
                <Link to='/detail'>Detalhes do Produto</Link>
            </nav> */}

        </div>
    )
}

export default Navbar
