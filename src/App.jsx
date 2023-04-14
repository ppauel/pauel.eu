import 'animate.css/animate.min.css';
import { ReactComponent as Logo } from './assets/logo.svg';
import About from './sections/About';
import Contact from './sections/Contact';
import Music from './sections/Music';
import Projects from './sections/Projects';
import './style/fonts.css';

/**
 * React App
 */
const App = () => {
    return (
        <div className='app'>
            <header>
                <Logo />
            </header>
            <main>
                <About />
                <Projects />
                <Contact />
                <Music />
            </main>
        </div>
    );
}

export default App;