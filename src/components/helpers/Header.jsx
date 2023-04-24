import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <nav className="navbar">
            < Link to={"/"}><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="logo" /></Link>
            <ul>
                <li><Link to={"/users"}>Users</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header