import Head from 'next/head';
import { useRouter } from 'next/router';
import useApi from '../../hooks/useApi';
import styles from './PageContainer.module.css';

/**
 * The PageContainer is the wrapper for pages.
 * It can add styling to the container of the page or the page itself
 *
 * @returns the container for a page
 */
const PageContainer = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  const isHomePage = pathname === '/';
  // use 'home' for lookup else use pathname replace first /
  const pageIdLookup = isHomePage ? 'home' : pathname.replace('/', '');
  const { isLoading, error, data } = useApi(`page-data?pageId=${pageIdLookup}`);
  // this could use some fallbacks
  const { pageName, pageDescription } = data;

  // it's loading the whole thing right now
  // so really this should become a subcomponent inside the page
  if (isLoading) {
    return (
      <div className={styles.pageContainer}>
        <p>Loading the burber... 🍔</p>
      </div>
    );
  }

  const siteTitle = 'Playburber 🍔';
  const pageTitle = !isHomePage ? `${pageName} | ${siteTitle}` : siteTitle;

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {error && <div className="error">{error}</div>}
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>Copyright Hamburber United &copy;</p>
      </footer>
    </div>
  );
};

export default PageContainer;
