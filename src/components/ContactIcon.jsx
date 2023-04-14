import { AnimationOnScroll } from 'react-animation-on-scroll';

/**
 * Contact icon with hover information
 * @param {Object} props
 * @param {string} props.destination Destination URL
 * @param {string} props.tooltip Tooltip text
 * @param {string} props.img Image source URL
 */
const ContactIcon = ({ destination, tooltip, img }) => {
    return (
        <div className='contact-icon'>
            <a target='_blank' rel='noreferrer' href={destination}>
                <AnimationOnScroll offset={50} animateOnce={true} animateIn='animate__fadeInUp'>
                    <img alt={tooltip} draggable={false} src={img} />
                </AnimationOnScroll>
            </a>
            <span className='tooltip-text'>{tooltip}</span>
        </div>
    )
}

export default ContactIcon;