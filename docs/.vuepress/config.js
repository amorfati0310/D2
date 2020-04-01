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
        children: ["/02/0224", "/02/0225", "/02/0226", "/02/0227", "/02/0228"],
      },
      {
        // TODO folder 안에 파일 파일명으로 그냥 긁어오면 안되나?
        title: `03`,
        collapsable: true,
        children: ["/03/0302", "/03/0303", "/03/0304", "/03/0305", "/03/0306", "/03/0307", "03/0313", "03/0314", "03/0315", "03/0316", "03/0317", "03/0318", "03/0319", "03/0320", "03/0321", "03/0323", "/03/0324", "03/0325", '03/0325', '03/0331'],
      },
      {
        title: `04`,
        collapsable: true,
        children: ["/04/0401"],
      },
      {
        title: `WD`,
        collapsable: true,
        children: ["WD/24", "WD/31"],
      },
    ],
    nav: [
      {
        text: "D2",
        link: "/d2",
      },
      {
        text: "Weekly Dali",
        link: "/wd",
      },
    ],
  },
  serviceWorker: true,
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-task-lists"));
    },
  },
};
