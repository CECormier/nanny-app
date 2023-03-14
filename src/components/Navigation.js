import {Link} from 'react-router-dom'

function Navigation()
{
    return(
        <div className="navbar">
            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/nanny">Nanny Page</Link>
            <Link className="navlink" to="/parents">Parent Page</Link>
            <Link className="navlink" to="/login">Login</Link>
            <Link className="navlink" to="/register">Register</Link>
        </div>
    )
}

export default Navigation;