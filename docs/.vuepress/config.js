module.exports = {
  base: "/element-admin-docs/",
  title: "Element-Admin",
  description: "一个简单的 Vue Element 后台管理系统",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "常见问题", link: "/problem/" },
      { text: "更新日志", link: "/version/" },
      {
        text: "源码下载",
        link: "https://github.com/sunshinemoment/element-admin",
      },
    ],
    sidebarDepth: 2,
    sidebar: {
      "/guide/": [
        {
          title: "指南",
          collapsable: false,
          children: ["/guide/", "/guide/know"],
        },
      ],
      "/problem/": ["/problem/"],
      "/version/": [
        {
          title: "更新日志",
          collapsable: false,
          children: ["/version/", "/version/V1.0.0"],
        },
      ],
    },
  },
};
