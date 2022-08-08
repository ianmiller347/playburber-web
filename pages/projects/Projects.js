import PageContainer from '../../components/PageContainer';

// we could definitely make this use an api for Projects content type
// similar to like a Wordpress Custom Post Type api, where the type is project
// should prob add a root css class for project as well for proper BEM
const Projects = () => (
  <PageContainer>
    <h1>Projects on the Playburber Server</h1>
    <div className="projects">
      <h2>What kind of projects we got going on?</h2>
      <div className="projects__block">
        <h3>Stairway from the bottom to the top</h3>
        <p>
          This one is pretty cool. They said I&apos;d never make it to the top,
          because I come from the bottom. But if you start at the bedrock and
          you can&apos;t go down. You can go all the way up till you can&apos;t
          build no mo. It&apos;s quite exciting to see, and along the way there
          are trees 😊
        </p>
      </div>
      <div className="projects__block">
        <h3>Auto smelter</h3>
        <p>
          So when you are at the community base and you want to check out what
          our villagers are doing, you might wonder where is the smithy man.
          Well let me tell you, he is smelting away at the outpost. It is
          automagic and wonderful how delightful this can be.
        </p>
      </div>
      <div className="projects__block">
        <h3>Dark red tower</h3>
        <p>
          It is a little bit spooky but also a little bit charming. It is tall.
          Over there, across the way! It&apos;s the dark tower?! You don&apos;t
          say!
        </p>
      </div>
    </div>
  </PageContainer>
);

export default Projects;
