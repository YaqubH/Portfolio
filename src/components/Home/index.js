 import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
     const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['','Y','a','q','u','b', '','H','a','s','a','n']
    const jobArray = ['S','o','f','t','w','a','r','e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])


    return (
      <>
        <div className="container home-page">
            <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/> 
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray}idx={22}/>
            </h1>
            <h2>Computer Science student at the University of California Irvine</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        <Logo />
    </div>
    <Loader type ="ball-clip-rotate-multiple"/>
    </>
    
    );
}

export default Home