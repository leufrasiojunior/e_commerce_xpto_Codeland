import { Link } from "react-router-dom"

// function abrirmenu() {
//     const hamburger = document.querySelector(".hamburger");
//     const navMenu = document.querySelector(".nav-menu");
//     hamburger.addEventListener("click", () => {
//         hamburger.classList.toggle(".active");
//         navMenu.classList.toggle("active");
//     });
// }


function Navbar() {
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

        </div>
    )
}

export default Navbar
