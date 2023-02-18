import PropTypes from 'prop-types';
import '../style/projects.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Project(props) {
    return (
            <AnimationOnScroll animatePreScroll={true} offset={50} className='project' style={{ backgroundColor: `${props.bg ?? '#5865F2'}`, flex: `${props.size ?? 100}` }} animateOnce={true} animateIn="animate__fadeInUp">
            <div className='project-content'>
                <div className='project-text'>
                    <h2>{props.title}</h2>
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className='project-footer'>
                    <a target="_blank" rel="noreferrer" href={props.url}><button className='primary'><img alt='' src='/assets/projects/web.svg' /> {props.button}</button></a>
                </div>
            </div>
            {props.img ? <div className='project-image' style={{ backgroundImage: `url('/assets/projects/${props.img}')` }}></div> : <></>}
        </AnimationOnScroll>
    );
}

Project.propTypes = {
    bg: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.number,
    size: PropTypes.string,
    url: PropTypes.string,
    button: PropTypes.string,
    img: PropTypes.string
};

export default Project;