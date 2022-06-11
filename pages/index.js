import Home from './Home';

/**
 * The PageContainer is the wrapper for pages.
 * Routing can exist in here and it can decide which page to render based on URL.
 * It can also inject anything that might need to be injected to specific pages.
 * Maybe this can even be changed and just render Router which then does the routing.
 * It's probably better to not do stuff in an index file anyway.
 * @returns the container for every page
 */
const PageContainer = () => (
  <div>
    <Home />
  </div>
);

export default PageContainer;
