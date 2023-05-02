import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Contact = () => {
    return (
        <>
        <div className ="container contact-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ', 'm', 'e']}
                idx={15}
                />
                </h1>
        <p>
            Im interested in becoming a Software Developer
            I enjoy porgramming and would love to hear of oppurtinities
        </p>
        <div className='contact-form'>
        <form>
            <ul>
                <li className='half'>
                    <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className='half'>
                    <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                    <input placeholder="Subject" type="text" name="subject" required /> 
                </li>
                <li>
                    <textarea placeholder="Message" name= "message" required> </textarea>
                </li>
                <li>
                    <input type="submit" className="flat-button" value="SEND" />
                </li>
            </ul>
        </form>
            </div>
            </div>
            </div>
        </>
    )
}
export default Contact