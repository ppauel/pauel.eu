import Contact from "./sections/Contact";
import Music from "./sections/Music";
import Projects from "./sections/Projects";
import "./style/fonts.css";
import "animate.css/animate.min.css";
import { ReactComponent as Logo } from "./assets/logo.svg";

function App() {
    return (
        <div className='app'>
            <header>
                <Logo />
            </header>
            <main>
                <Projects />
                <Contact />
                <Music />
            </main>
        </div>
    );
}

export default App;