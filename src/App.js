import Contact from "./sections/Contact";
import Music from "./sections/Music";
import Projects from "./sections/Projects";
import "./style/fonts.css";
import "animate.css/animate.min.css";

function App() {
    return (
        <div className='app'>
            <header>
                <div className='logo'></div>
            </header>
            <main>
                <Projects />
                <Contact />
                <Music />
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;