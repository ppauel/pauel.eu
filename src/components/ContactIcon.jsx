import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function ContactIcon(props) {
    return (
        <div className="contact-icon">
            <a target="_blank" rel="noreferrer" href={props.destination}>
                <AnimationOnScroll offset={50} animateOnce={true} animateIn="animate__fadeInUp">
                    <img alt={props.tooltip} draggable={false} src={props.img} />
                </AnimationOnScroll>
            </a>
            <span className="tooltip-text">{props.tooltip}</span>
        </div>
    )
}

ContactIcon.propTypes = {
    destination: PropTypes.string,
    tooltip: PropTypes.string,
    img: PropTypes.string
};

export default ContactIcon;