import Project from '../components/Project';
import '../style/projects.css';

/**
 * Projects Section
 */
const Projects = () => {
    return (
        <>
            <h1 className='heading'>Projects & Work</h1>
            <div className='projects'>
                <Project
                    title='Community Architects'
                    website='https://community-architects.net'
                    github='https://github.com/communityarchitects'
                    bg='#2F975F'
                    size='7'
                    img={require('../assets/projects/community-architects.svg').default}
                >
                    Bringing different community leaders from all platforms across the board together into one place. In 2021, I joined the team and developed their website and Discord bots.
                </Project>
                <Project
                    title='Discord Bot Template'
                    github='https://github.com/ppauel/typescript-discord-bot'
                    bg='#db9053'
                    size='3'
                >
                    A TypeScript-based multi-purpose Discord template featuring various handlers.
                </Project>

                <Break />

                <Project
                    title='Naxite'
                    website='https://nax.gg'
                    bg='#438be8'
                    size='2'
                >
                    A <b>commissioned</b> homepage for the community manager Naxite.
                </Project>
                <Project
                    title='Roles Bot'
                    website='https://roles.bot'
                    bg='#865EDF'
                    size='8'
                    img={require('../assets/projects/roles-bot.svg').default}
                >
                    The Roles Discord Bot offers unique features for managing a Discord server's roles and is used on more than 3,000 servers. Since 2021 I'm working on this project together with <a target='_blank' rel='noreferrer' href='https://leon.how' >Leon</a>.
                </Project>
            </div>
        </>
    );
}

/**
 * Flexbox Break
 */
const Break = () => {
    return (
        <div className='break'></div>
    );
}

export default Projects;