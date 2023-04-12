import ContactIcon from "../components/ContactIcon";
import '../style/contact.css';

function Contact(props) {
    return (
        <div className="contact">
            <h1 className="heading">You can reach me here</h1>
            <div className="contact-icons">
                <ContactIcon tooltip="Mail" destination="mailto:hello@pauel.eu" img={require('../assets/social/mail.svg').default} />
                <ContactIcon tooltip="GitHub" destination="https://github.com/ppauel" img={require('../assets/social/github.svg').default} />
                <ContactIcon tooltip="Discord" destination="https://discord.gg/Un86EhSaQ8" img={require('../assets/social/discord.svg').default} />
            </div>
        </div>
    );
}

export default Contact;