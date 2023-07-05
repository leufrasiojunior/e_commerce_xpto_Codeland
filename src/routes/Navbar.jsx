import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <Link to='/'>Home Page Novo</Link>
            <Link to='/produtos'>Produtos</Link>
            <Link to='/detail'>Detalhes do Produto</Link>
        </nav>
    )
}

export default Navbar
