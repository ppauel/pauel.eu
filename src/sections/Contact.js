import ContactIcon from "../components/ContactIcon";
import '../style/contact.css';

function Contact(props) {
    return (
        <div className="contact">
            <h1 className="heading">You can reach me here</h1>
            <div className="contact-icons">
                <ContactIcon tooltip="Mail" destination="mailto:hello@pauel.eu" img="/assets/social/mail.svg" />
                <ContactIcon tooltip="GitHub" destination="https://github.com/ppauel" img="/assets/social/github.svg" />
                <ContactIcon tooltip="Discord" destination="https://discord.gg/Un86EhSaQ8" img="/assets/social/discord.svg" />
            </div>
        </div>
    );
}

export default Contact;