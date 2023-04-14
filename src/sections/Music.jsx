import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../style/music.css';

/**
 * Music Section
 */
const Music = () => {
    return (
        <div className='music'>
            <AnimationOnScroll offset={30} animateOnce={true} animateIn='animate__fadeIn'>
                <img title='Scan me' alt='We Are The People (Southstar Remix)' draggable={false} src={require('../assets/music/spotify-code.svg').default} />
            </AnimationOnScroll>
            <p className='description'>Oh, and here's a <span className='song'>song</span> I enjoy at the moment.</p>
            <div className='contact-icons'>
            </div>
        </div>
    );
}

export default Music;