import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'


const About = () => {
    return(
        <div className='container about-page'>
            <div className='text-zone'>
            <h1>
                <AnimatedLetters
                strArray={['A','b','o','u','t', ' ', 'm','e']}
                idx={15}
                />
                </h1>
                <p>I am a 20 year old aspiring software developer, I enjoy programming and problem solving in my free time. Currently Im a Junior at Kean University studying Computer Science, with a graduation date set on May 2024.

                </p>
                <p>
                I believe that the key to great software is the vision and communcation a team has.
                </p>
                <p>
                Some of my biggest strengths include communication among my peers. I believe that expressing ones ideas without fear of being judged is key to great project building. I believe my problem solving is another one of my strengths, I do not give up when it comes to solving issues with my project.
                </p>
            </div>
            <div className='stage-cube-cont'> 
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color='#DD0031'/>

                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529'/>

                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>

                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>

                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>

                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>

                </div>
            </div>
            </div>

        </div>
    )
}

export default About
