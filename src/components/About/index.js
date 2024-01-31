import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPython, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () =>{

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray= {['A', 'b', 'o', 'u', 't', '','m', 'e']}
                        idx={15}
                    />
                </h1>
                <p> Welcome! I'm Yaqub Hasan, a devoted coder with a deep-rooted love for crafting 
                    code that breathes life into innovative applications. My academic path in Computer 
                    Science at the University of California, Irvine, is fueled by a fascination for the 
                    limitless potential of programming languages. Fluent in JavaScript, Python, HTML, and CSS, 
                    I relish the challenge of transforming complex problems into elegant software solutions.</p>
                <p> The thrill of coding is my driving force; it's a craft I continually refine with every line of 
                    code I write. My journey is marked by a series of engaging projects where I've applied my skills 
                    in SQL and various software and tools to develop applications that are as robust in functionality 
                    as they are intuitive in design. From the intricacies of algorithm design to the finesse of user 
                    interface development, my projects are a testament to my commitment to quality and efficiency in 
                    software development.</p>
                <p> For those who share my passion for technology and innovation, I invite you to explore the portfolio 
                    section of my site, where my projects stand as milestones along my coding journey. Whether you're seeking 
                    a collaborative development experience or a dedicated individual to bring fresh perspectives to your team, 
                    I am excited about the opportunity to connect and contribute to your vision with the same zeal that coding 
                    ignites in me.</p>
            </div>
            <div className="stage-cube-cont">
             <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faPython} color="#EFD81D" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#174be8" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
        </div>
        </div>
        <Loader type="ball-clip-rotate-multiple"/>
        </>
    )
}

export default About