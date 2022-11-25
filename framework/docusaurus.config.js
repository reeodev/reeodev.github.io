// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// const path = require("path")
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reeodev',
  tagline: 'Open, click and use. EZ.',
  url: 'https://reeodev.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/reelogo.png',
  organizationName: 'reeodev', 
  projectName: 'reeodev.github.io', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    '@easyops-cn/docusaurus-search-local',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Reeodev',
        logo: {
          alt: 'Site Logo Yeah',
          src: 'img/reelogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Resources',
          },
          // {
          //   to: '/ToolsInterface',
          //   label: 'Tools',
          //   position: 'left'
          // },
          {
            href: 'https://github.com/reeodev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
            {
              title: 'Resources',
              items: [
                { label: 'General resources', to: '/docs/general/ui' },
                { label: 'HTML', to: '/docs/html/animations' },
                { label: 'CSS', to: '/docs/css/fonts' },
                { label: 'React', to: '/docs/react/rawReact/reactCss' },
              ],
            },
            {
              title: 'Tools',
              items: [
                { label: 'Home', to: '/' },
              ],
            },
            {
              title: 'More',
              items: [
                { label: 'Blog',to: '/blog' },
                { label: 'GitHub',href: 'https://github.com/reeodev', },
              ],
            },
        ],
        copyright: `Burh.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
