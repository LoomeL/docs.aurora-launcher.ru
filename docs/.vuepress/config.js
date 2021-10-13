module.exports = {
  lang: "ru-RU",
  title: "Aurora Launcher",
  description:
    "Лаунчер с удобной кастомизацией дизайна для игровых проектов Minecraft",
  bundler: "@vuepress/bundler-vite",
  themeConfig: {
    logo: "/logo.png",
    navbar: [
      {
        text: "Базовая настройка",
        link: "/basic/",
      },
      {
        text: "Для разработчиков",
        link: "/for-developers/",
      },
    ],
    sidebar: {
      "/basic/": [
        {
          text: "Базовая настройка",
          children: ["/basic/README.md", "/basic/clients.md"],
        },
      ],
      "/for-developers/": [
        {
          text: "Для разработчиков",
          children: [
            "/for-developers/README.md",
            "/for-developers/mirrors.md",
            "/for-developers/api.md",
            "/for-developers/errors.md",
          ],
        },
      ],
    },
  },
};