import { Link } from 'react-router';
import "./style.css";

export default function NavBar(){

    return(
        <div className='navbar'>
            <Link to='/'>Home</Link> |
            <Link to='about'>About</Link> |
            <Link to='contact'>Contact</Link>
        </div>
    )
}