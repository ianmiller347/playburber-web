import Head from 'next/head';
import PageContainer from '../../components/PageContainer';

const About = () => (
  <PageContainer>
    <Head>
      <title>About | Playburber 🍔</title>
      <meta name="description" content="About the playburber server play" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>About Playburber</h1>
    <div>
      <p>It is for friends to build some cool games and have a time.</p>
    </div>
  </PageContainer>
);

export default About;
