export const SITE = {
  website: "https://blog.754321.xyz/", // replace this with your deployed domain
  author: "一歩一歩",
  profile: "/about",
  desc: "一个个人博客",
  title: "一歩一歩",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 10,
  scheduledPostMargin: 1 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: false, // show back button in post detail
  // editPost: false,
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: false,
  },
  dynamicOgImage: true,
} as const;
