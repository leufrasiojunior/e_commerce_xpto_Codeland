import { Link } from "react-router-dom"
import { useState } from "react"


// function abrirmenu() {
//     const hamburger = document.querySelector(".hamburger");
//     const navMenu = document.querySelector(".nav-menu");
//     hamburger.addEventListener("click", () => {
//         hamburger.classList.toggle(".active");
//         navMenu.classList.toggle(".active");
//     });
// }


function Navbar() {
    const [active, setActive] = useState(false);
    function ativar() {
        setActive(!active);
        // console.log(active)
    }
    return (
        <div>
            <header>
                <nav className="navbar">
                    <Link to="#" className="logo">XPTO</Link>
                    <ul className={active ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-itens"><Link to='/' className="nav-link">Home Page Novo</Link></li>
                        <li className="nav-itens"><Link to='/login' className="nav-link">Login</Link></li>
                        <li className="nav-itens"><Link to='/produtos' className="nav-link">Produtos</Link></li>
                        <li className="nav-itens"><Link to='/carrinho' className="nav-link">Carrinho</Link></li>
                    </ul>
                    <div className="hamburger" onClick={ativar}>
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
