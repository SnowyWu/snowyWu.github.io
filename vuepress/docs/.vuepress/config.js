module.exports = {
  theme: "",
  title: "Snow-document",
  base: "/",
  port: "3500",
  themeConfig: {
    nav: [
      {
        text: "项目",
        link: "/project/",
      },
    ],
    sidebar: {
      "/project/": ["/project/"],
    },
  },
  head: [
    // add jquert and fancybox
    [
      "script",
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js",
      },
    ],
    [
      "script",
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css",
      },
    ],
  ],
  plugins: [],
  markdown: {},
};
