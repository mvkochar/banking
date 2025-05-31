import './css/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-logo"><img src="/images/logo.svg" alt="Logo" /></div>
      <nav>
        <ul className="footer-nav d-f">
          <li><a href="">Home</a></li>
          <li><a href="">Carers</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Security</a></li>
        </ul>
      </nav>
      <div className="footer-middle">
        <div className="footer-contacts d-f">
          <p className="footer-email">hello@skillbirdge.com</p>
          <p className="footer-phone">+91 91813 23 2309</p>
          <p className="footer-location">Somewhere in the World</p>
        </div>
      </div>
      <div className="footer-bottom d-f jc-sb align-center">
        <div className="footer-social d-f">
          <a href="" className="d-b"><img src="/images/facebook.png" alt="Facebook" /></a>
          <a href="" className="d-b"><img src="/images/twitter.png" alt="Twitter" /></a>
          <a href="" className="d-b"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
        </div>
        <p className="footer-copyright">YourBank All Rights Reserved</p>
        <p className="footer-links"><a href="">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="">Terms of Service</a></p>
      </div>
    </footer>
  )
}

export default Footer