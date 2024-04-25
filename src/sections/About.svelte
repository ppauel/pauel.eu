<script>
  import Profile from "@components/Profile.svelte";
  import Socials from "@config/socials.json";
</script>

<Profile />

<section id="about">
  <h1>About Me</h1>
  <p>
    I'm Paul, an 19-year-old CompSci student living in Germany. I have an
    interest in web and app development, often delving into freelance projects
    alongside my work and studies. Beyond that, I enjoy exploring <a
      href={Socials.dribble}
      target="_blank"
      rel="noreferrer">graphic design</a
    >
    and music production.
  </p>
</section>
