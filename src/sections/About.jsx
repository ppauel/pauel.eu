import '../style/about.css';

/**
 * About Me Section
 */
const About = () => {
    return (
        <>
            <div className="logo">
                <img draggable={false} className="no-touch" src={require('../assets/profile.png')} />
            </div>
            <h1 className='heading'>About Me</h1>
            <div className="about">
                <div>
                    <p className="description">
                    I'm Paul, an 18-year-old student living in Germany. I mainly gain experience in web & app development and occasionally experiment with <a href="https://dribbble.com/ppauel" target="_blank">graphic design</a> and music production.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;