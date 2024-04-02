import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose, faFile } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yaqub-hasan/" className="icon">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    <div className="tooltip">LinkedIn</div>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/YaqubH" className="icon">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    <div className="tooltip">Github</div>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1I0MubNdy98SEK_98Xz4dvED-e26dlHED/view?usp=sharing" className="icon">
                    <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
                    <div className="tooltip">Resume</div>
                </a>
            </li>
        </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar