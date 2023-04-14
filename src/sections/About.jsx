import Color from "../components/Color";

/**
 * About Me Section
 */
const About = () => {
    return (
        <>
            <h1 className='heading'>About Me</h1>
            <p style={{ marginBottom: '100px' }} className='description'>
                I'm a developer from Germany. I create <Color code='#ddb7ed'>websites</Color> based on <Color>React.js</Color> or <Color>PHP</Color>.
                My <Color code='#ddb7ed'>bots</Color> & <Color code='#ddb7ed'>applications</Color> are primarily written in <Color>TypeScript</Color>.
                Apart from that, I occasionally attempt creating <Color code='#ddb7ed'>3D graphic design</Color> and <Color code='#ddb7ed'>music</Color>.
            </p>
        </>
    )
}

export default About;