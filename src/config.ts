export const SITE = {
  website: "https://blog.754321.xyz/", // replace this with your deployed domain
  author: "invest-My",
  profile: "/about",
  desc: "记录自己成长的过程",
  title: "invest My Life",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 10,
  // scheduledPostMargin: 60 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: false, // show back button in post detail
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: false,
  },
  dynamicOgImage: true,
  menu: [
    { title: "文章", path: "/posts" },
    { title: "标签", path: "/tags" },
    { title: "链接", path: "/link" },
  ],
} as const;
