import './css/Header.css'

const Header = () => {
  return (
    <header className="header d-f jc-sb align-center">
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <nav>
            <ul className="header-nav d-f align-center">
                <li className="header-nav-item"><a href="">Home</a></li>
                <li className="header-nav-item"><a href="">Careers</a></li>
                <li className="header-nav-item"><a href="">About</a></li>
                <li className="header-nav-item"><a href="">Security</a></li>
            </ul>
        </nav>
        <div className="header-actions d-f">
            <button className='header-actions-sign'>Sign Up</button>
            <button className='header-actions-login'>Login</button>
        </div>
    </header>
  )
}

export default Header