// this is acting like a static db right now to return json for pages
// it can easily get replaced with an AWS dynamo db returning in same structure
// pagesData, Map<String, PageData>
// [pageId]: { ...pageData }
// we could hold page content here too.
const pagesData = {
  about: {
    pageId: 'about', // this is redundant, but for the sake of consistency.
    pageName: 'About',
    pageDescription: 'About the playburber server play',
  },
  home: {
    pageId: 'home', // this is redundant, but for the sake of consistency.
    pageName: 'Home',
    pageDescription: 'Playburber a hamburber part 1.19 basically lol',
  },
  projects: {
    pageId: 'projects', // this is redundant, could just use url path.
    pageName: 'Projects',
    pageDescription:
      'Playburber projects are very neat; wouldnt you like to check the progress?',
  },
};

export default function handler(req, res) {
  const { pageId } = req.query;
  // if no pageId data then set pageName as pageId
  const pageName = pagesData?.[pageId]?.pageName ?? pageId;
  const pageDescription = pagesData?.[pageId]?.pageDescription ?? pageId;

  res.status(200).json({
    pageId,
    pageName,
    pageDescription,
  });
}
