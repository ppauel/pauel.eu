import Color from "../components/Color";
import '../style/about.css';

/**
 * About Me Section
 */
const About = () => {
    return (
        <>
            <h1 className='heading'>About Me</h1>
            <div className="about">
                <div>
                    <p className="description">
                        I'm Paul, an 18 years old developer from Germany. I have experience in creating <Color code='#ddb7ed'>websites</Color> based on <Color>React.js</Color> or <Color>PHP</Color>.
                        My <Color code='#ddb7ed'>bots & applications</Color> are primarily written in <Color>TypeScript</Color>.
                        Apart from that, I occasionally attempt creating 3D <Color code='#ddb7ed'>graphic design</Color> and <Color code='#ddb7ed'>music</Color>.
                    </p>
                    <div className="external">
                        <a href="https://dribbble.com/ppauel" target="_blank" tabIndex={-1}>
                            <button className="secondary" tabIndex={0}>View on Dribbble</button>
                        </a>
                    </div>
                </div>
                <img draggable={false} className="no-touch" src={require('../assets/profile.png')} />
            </div>
        </>
    )
}

export default About;