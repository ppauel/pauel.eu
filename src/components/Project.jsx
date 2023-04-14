import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as WebSVG } from '../assets/projects/web.svg';
import { ReactComponent as GitHubSVG } from '../assets/social/github.svg';
import '../style/projects.css';

/**
 * Project section
 * @param {Object} props
 * @param {string} props.title Project title
 * @param {string} props.bg Background color (resolvable color)
 * @param {string | number} props.size Flex size
 * @param {string?} props.website Website URL
 * @param {string?} props.github GitHub URL
 * @param {string?} props.img Image URL
 */
const Project = ({ title, bg, size, website, github, img, children }) => {
    return (
        <AnimationOnScroll
            className='project'
            style={{ backgroundColor: `${bg ?? '#5865F2'}`, flex: `${size ?? 100}` }}
            animatePreScroll={true} offset={50} animateOnce={true} animateIn='animate__fadeInUp'
        >
            <div className='project-content'>
                <div className='project-text'>
                    <h2>{title}</h2>
                    <p>
                        {children}
                    </p>
                </div>
                <div className='project-footer'>
                    {website ?
                        <a target='_blank' rel='noreferrer' href={website}>
                            <button className='primary'><WebSVG /> Visit Website</button>
                        </a>
                        : null
                    }

                    {github ?
                        <a target='_blank' rel='noreferrer' href={github}>
                            <button className='primary'><GitHubSVG /> View on GitHub</button>
                        </a>
                        : null
                    }
                </div>
            </div>
            {img ?
                <div className='project-image' style={{ backgroundImage: `url(${img})` }}></div>
                : null
            }
        </AnimationOnScroll>
    );
}

export default Project;