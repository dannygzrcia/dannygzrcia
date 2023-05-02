import LogoS from '../../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from 'react';


const Home=() => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','n','n','y']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']


return (
    <div className= "container home-page">
<div className = "text-zone">
<h1>Hi, <br /> Im
    <img src ={LogoS} alt="develop"/>
    <AnimatedLetters letterClass={letterClass}
    strArray={nameArray}
    idx={15}
    />
    

    <br/>
    web developer
    </h1>
    <h2> Frontend Developer</h2>
    <Link to ="/contact" className= 'flat-button' >CONTACT ME</Link>
</div>

    </div>
)
}
export default Home
