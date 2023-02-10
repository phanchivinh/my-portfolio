import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBriefcase, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'


import './NavList.css'

const NavList = () => {
    const location = useLocation().pathname.slice(1)

  return (
    <div className='nav-list'>
        <ul>
            <li className='nav-item'>
                <Link to='/' className={location === '' ? 'active' : '' }>
                    <h2>Home</h2>
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/portfolio' className={location === 'portfolio' ? 'active' : '' }>
                    <h2>Portfolio</h2>
                    <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/about' className={location === 'about' ? 'active' : '' }>
                    <h2>About</h2>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact' className={location === 'contact' ? 'active' : '' }>
                    <h2>Contact</h2>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavList