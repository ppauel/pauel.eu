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
                        I'm Paul, an 18 years old developer from Germany. I have experience in creating websites based on React.js or PHP.
                        My bots & applicationsare primarily written in TypeScript.
                        Apart from that, I occasionally attempt creating <a href="https://dribbble.com/ppauel" target="_blank">3D graphic design</a> and music.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;