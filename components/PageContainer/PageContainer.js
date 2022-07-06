import styles from './PageContainer.module.css';

/**
 * The PageContainer is the wrapper for pages.
 * It can add styling to the container of the page or the page itself
 *
 * @returns the container for a page
 */
const PageContainer = ({ children }) => (
  <div className={styles.pageContainer}>
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>
      <p>Copyright Hamburber United &copy;</p>
    </footer>
  </div>
);

export default PageContainer;
