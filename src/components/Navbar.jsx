import {React, useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    // Highlighting the active page.
    const location = useLocation();
    const currentPath = location.pathname;

    function handleClick(){
        setIsActive((pre)=>!pre);
    }

  return (
    <nav className='navbar'>
        <div className="brand">
            <p className="brand-name">Router</p>
        </div>
        <ul className={"nav-links " + (isActive ? 'active': '')}>
            <li className={currentPath=== '/' ? 'active-page': ''}>
                <NavLink to={'/'}   >Home</NavLink>
            </li >
            <li className={currentPath=== '/about' ? 'active-page': ''}>
                <NavLink to={'/about'} >About</NavLink>
            </li>
            <li className={currentPath=== '/contact' ? 'active-page': ''}>
                <NavLink to={'/contact'} >Contact</NavLink>
            </li>
            <li className={currentPath=== '/blog' ? 'active-page': ''}>
                <NavLink to={'/blog'} >Blogs</NavLink>
            </li>
        </ul>
        <button onClick={handleClick} className="toggle-btn" aria-label="Toggle navigation">
            ☰
        </button>

    </nav>
  );
}
