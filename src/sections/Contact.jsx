import { AnimationOnScroll } from 'react-animation-on-scroll';
import ContactIcon from '../components/ContactIcon';
import '../style/contact.css';

/**
 * Contact Section
 */
const Contact = () => {
    return (
        <div className='contact'>
            <AnimationOnScroll offset={20} animateOnce={true} animateIn='animate__fadeInUp'>
                <h1 className='heading center'>You can reach me here</h1>
                <div className='contact-icons'>
                    <ContactIcon tooltip='Mail' destination='mailto:hello@pauel.eu' img={require('../assets/social/mail.svg').default} />
                    <ContactIcon tooltip='GitHub' destination='https://github.com/ppauel' img={require('../assets/social/github.svg').default} />
                    <ContactIcon tooltip='X' destination='https://twitter.com/_pauel' img={require('../assets/social/twitter.svg').default} />
                    <ContactIcon tooltip='Discord' destination='https://discord.gg/XQGrewKZ5Y' img={require('../assets/social/discord.svg').default} />
                </div>
            </AnimationOnScroll>
        </div>
    );
}

export default Contact;