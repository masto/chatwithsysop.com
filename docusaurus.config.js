// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CHAT WITH SYSOP",
  tagline: "a site about stuff",
  url: "https://chatwithsysop.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "masto", // Usually your GitHub org/user name.
  projectName: "chatwithsysop.com", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      // Mastodon verification
      tagName: "link",
      attributes: {
        rel: "me",
        href: "https://masto.masto.com/@masto",
      },
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/masto/chatwithsysop.com/tree/main/',
        },
        // Disable the built-in blog plugin: we're using our own below
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "./plugins/blog-plugin",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
        showReadingTime: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "CWS",
        logo: {
          alt: "CWS Logo",
          src: "img/cws-logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "projects",
            position: "left",
            label: "Projects",
          },
          { to: "/blog", label: "Blog", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Mastodon",
                href: "https://masto.masto.com/@masto",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@ChrisMasto",
              },
              {
                label: "GitHub",
                href: "https://github.com/masto",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Christopher Masto. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.lightCodeTheme,
        darkTheme: prismThemes.darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
