import { Link } from 'react-router-dom'
import './css/Header.css'

const Header = () => {
  return (
    <header className="header d-f jc-sb align-center">
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <nav>
            <ul className="header-nav d-f align-center">
                <li className="header-nav-item"><Link to="/">Home</Link></li>
                <li className="header-nav-item"><Link to="/careers">Careers</Link></li>
                <li className="header-nav-item"><Link to="/about">About</Link></li>
                <li className="header-nav-item"><Link to="/security">Security</Link></li>
            </ul>
        </nav>
        <div className="header-actions d-f">
            <a href='' className='header-actions-sign'>Sign Up</a>
            <Link to='/login' className='header-actions-login'>Login</Link>
        </div>
    </header>
  )
}

export default Header