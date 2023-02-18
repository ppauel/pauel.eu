import '../style/music.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Music(props) {
    return (
        <div className="music">
            <AnimationOnScroll offset={30} animateOnce={true} animateIn="animate__fadeIn">
                <img title='Scan me' alt='We Are The People (Southstar Remix)' src='/assets/music/we-are-the-people-southstar-rmx.svg' />
            </AnimationOnScroll>
            <p className='description'>Oh, and here's a <span className="song">song</span> I enjoy at the moment</p>
            <div className="contact-icons">
            </div>
        </div>
    );
}

export default Music;