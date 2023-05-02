import './index.scss'
import { Link,NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo.jpg'
import LogoSub from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser ,faHome } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className = 'nav-bar'>
            <Link className='logo' to ='/'>
                    <img src={LogoS} alt = "logo"/>
                    <img className = "sub-logo"src={LogoSub} alt = "danny"/>
            </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to ="/">
            <FontAwesomeIcon icon ={faHome} color ="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className ="about-link"to ="/about">
            <FontAwesomeIcon icon ={faUser} color ="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className = "contact-link"to ="/contact">
            <FontAwesomeIcon icon ={faEnvelope} color ="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target= ""
            rel="non"
            href="https://www.linkedin.com/in/daniel-garcia-835390202/"
            >
                <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e" />
                </a> 
             </li>
             <li>
            <a target= ""
            rel="non"
            href="https://www.linkedin.com/in/daniel-garcia-835390202/"
            >
                <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e" />
                </a> 
             </li>
    </ul>

    </div>

)
export default Sidebar
