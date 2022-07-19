import Link from 'next/link';
import PageContainer from '../../components/PageContainer';
import styles from './Home.module.css';

/**
 * The Home page is the Home Page where you land at Home.
 * @returns the Home page ya dingus!
 */
export default function Home() {
  const pageTitle = 'Playburber 🍔';

  return (
    <PageContainer>
      <div className={styles.homeMain}>
        <h1 className={styles.title}>{pageTitle}</h1>

        <p className={styles.description}>friends play the game</p>

        <div className={styles.grid}>
          <Link href="/about" className={styles.card} passHref>
            <a className={styles.card}>
              <h2>About the server &rarr;</h2>
              <p>What is playburber all about anyway</p>
            </a>
          </Link>

          <Link href="/locations" passHref>
            <a className={styles.card}>
              <h2>Locations &rarr;</h2>
              <p>
                Learn about useful locations on this wonderful minecraft server
              </p>
            </a>
          </Link>

          <Link href="/builds" passHref>
            <a className={styles.card}>
              <h2>Projects and Builds &rarr;</h2>
              <p>
                Find out about cool builds happening from this great group of
                friends
              </p>
            </a>
          </Link>

          <Link href="/rules" passHref>
            <a className={styles.card}>
              <h2>Server rules &rarr;</h2>
              <p>What plugins are allowed and stuff?</p>
            </a>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
