function Home() {
  return (
    <>
      <header>
        <div className="logo-container">
          <img alt="pauel" className="logo" src="/assets/logo.svg" />
        </div>
        <div className="socials">
          <SocialIcon source="/assets/socials/github.svg" destination="https://github.com/ppauel" tooltip="GitHub" />
          <SocialIcon source="/assets/socials/discord.svg" destination="https://discord.gg/3RHpJefr3e" tooltip="Discord" />
          <SocialIcon source="/assets/socials/mail.svg" destination="mailto:mail@pauel.eu" tooltip="Mail" />
        </div>
      </header>
      <main>
        <div>
          <h2 className="section-title">Recent Projects</h2>
          <h3 className="section-subtitle">i've been working on</h3>
        </div>
        <div className="projects">
          <Project imageUrl="/assets/projects/community_architects.png" destination="https://communityarchitects.net" heading="Community Architects" description={<>A community committed to bringing together different community moderators, owners, designers and more from all platforms across the board into one place. I developed their website and Discord bot called "Bep".</>} />
          <Project imageUrl="/assets/projects/roles.png" destination="https://roles.bot" heading="Roles" description={<>The Roles Discord Bot offers unique features for managing a Discord server's roles and is used on more than 150 servers. Starting in 2021, together with Leon, we developed this project.</>} />
        </div>
      </main>
      <footer>
        <div title="Scan me!" className="spotify-code"></div>
      </footer>
    </>
  );
}

function SocialIcon(props) {
  return (
    <div className="social">
      <a target="_blank" rel="noreferrer" title={props.destination} href={props.destination}>
        <img alt="Project Banner" src={props.source} />
      </a>
      <span className="tooltip-text">{props.tooltip}</span>
    </div>
  )
}

function Project(props) {
  return (
    <div className="project">
      <div>
        <a target="_blank" rel="noreferrer" title={props.destination} href={props.destination}>
          <div className="project-image" style={{ background: `url(${props.imageUrl}) center center/cover no-repeat` }}></div>
        </a>
      </div>
      <div className="project-text">
        <h4>{props.heading}</h4>
        <h6>{props.description}</h6>
      </div>
    </div>
  )
}

export default Home;