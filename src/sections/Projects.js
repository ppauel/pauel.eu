import Color from "../components/Color";
import Project from "../components/Project";
import '../style/projects.css';

function Projects(props) {
    return (
        <>
            <h1 className="heading">Projects & Work</h1>
            <p className="description">
                I develop websites based on <Color code="#89F1FF">React.js</Color> or <Color code="#ABD7FF">PHP</Color>, using <Color code="#FF5B27">HTML</Color>, <Color code="#67C8FF">CSS</Color> and <Color code="#FFEA7B">JavaScript</Color>.
                <br />
                My applications are primarily written in <Color code="#53A2FF">TypeScript</Color>.
            </p>
            <div className="projects">
                <Project title="Roles Bot" url="https://roles.bot" button="roles.bot" bg="#865EDF" size="7" img="roles-bot.svg">
                    The Roles Discord Bot offers unique features for managing a Discord server's roles and is used on more than 2,000 servers. Since 2021 I'm working on this project together with <a target="_blank" rel="noreferrer" href="https://leon.how" >Leon</a>.
                </Project>
                <Project title="Discord Bot Template" url="https://github.com/ppauel/typescript-discord-bot" button="View on GitHub" bg="#5865F2" size="3">
                    A TypeScript-based multi-purpose Discord template featuring various handlers.
                </Project>
                <Project title="Community Architects" url="https://community-architects.net" button="community-architects.net" bg="#2F975F" size="100%" img="community-architects.svg">
                    A community committed to bringing together different community leaders, moderators, designers and more from all platforms across the board into one place. I joined the team in 2021 and developed their website and Discord Bots.
                </Project>
            </div>
        </>
    );
}

export default Projects;