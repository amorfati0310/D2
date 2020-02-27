module.exports = {
  title: `D2 Daily Dali`,
  description: "daily dali & weekly dali",
  base: "/D2/",
  // head: [
  //   [
  //     "link",
  //     {
  //       rel: "icon",
  //       href: "/dali.png"
  //     }
  //   ]
  // ],
  themeConfig: {
    sidebar: [
      {
        title: `02`,
        collapsable: true,
        children: ["/02/0224", "/02/0225", "/02/0226", "/02/0227"]
      },
      {
        title: `WD`,
        collapsable: true,
        children: ["WD/24"]
      }
    ],
    nav: [
      {
        text: "D2",
        link: "/d2"
      },
      {
        text: "Weekly Dali",
        link: "/wd"
      }
    ]
  },
  serviceWorker: true,
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-task-lists"));
    }
  }
};
