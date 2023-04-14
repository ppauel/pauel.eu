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
                    title='Roles Bot'
                    website='https://roles.bot'
                    bg='#865EDF'
                    size='7'
                    img={require('../assets/projects/roles-bot.svg').default}
                >
                    The Roles Discord Bot offers unique features for managing a Discord server's roles and is used on more than 2,000 servers. Since 2021 I'm working on this project together with <a target='_blank' rel='noreferrer' href='https://leon.how' >Leon</a>.
                </Project>
                <Project
                    title='Discord Bot Template'
                    github='https://github.com/ppauel/typescript-discord-bot'
                    bg='#5865F2'
                    size='3'
                >
                    A TypeScript-based multi-purpose Discord template featuring various handlers.
                </Project>

                <Break />

                <Project
                    title='Naxite'
                    website='https://nax.gg'
                    bg='#37affa'
                    size='2'
                >
                    A commissioned homepage for the Community Manager Naxite.
                </Project>
                <Project
                    title='Community Architects'
                    website='https://community-architects.net'
                    github='https://github.com/communityarchitects'
                    bg='#2F975F'
                    size='8'
                    img={require('../assets/projects/community-architects.svg').default}
                >
                    A community bringing together different community leaders from all platforms across the board into one place. I joined the team in 2021 and developed their website and Discord Bots.
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