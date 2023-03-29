// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

async function createConfig() {
  /** @type {import('@docusaurus/types').Config} */
  return {
    title: "Stable Wiki",
    tagline: "Unofficial stable diffusion wiki",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://stable-wiki.org",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "GabrielVidal1", // Usually your GitHub org/user name.
    projectName: "stable-wiki", // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },
    markdown: {
      mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid"],

    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            // path: "mechanics",
            sidebarPath: require.resolve("./sidebars.js"),

            remarkPlugins: [
              (await import("remark-gfm")).default,
              [
                (await import("@benchmark-urbanism/remark-bibtex")).default,
                { bibtexFile: "bibliography.bib" },
              ],
            ],
          },
          // blog: {
          //   showReadingTime: true,
          // },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
          title: "Stable Wiki",
          logo: {
            alt: "Stable Wiki Logo",
            src: "img/icon.png",
          },
          items: [
            {
              type: "doc",
              docId: "stable-diffusion/README",
              position: "left",
              label: "Mechanics",
            },
            {
              to: '/dynamics/intro',
              label: 'Dynamics',
              activeBaseRegex: `/dynamics/`,
              position: 'left',
            },
            {
              to: '/parameters/intro',
              label: 'Parameters',
              position: 'left',
              activeBaseRegex: `/parameters/`,
            },
            {to: 'contribute', label:"Contribute", position:"left"},
            {
              href: "https://learnprompting.org/docs/category/%EF%B8%8F-image-prompting",
              label: "Prompt engineering",
              position: "right",
            },
            {
              href: "https://github.com/GabrielVidal1/stable-wiki",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Stable Diffusion",
                  to: "/docs/stable-diffusion",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/GabrielVidal1/stable-wiki",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Stable Wiki. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),

      plugins: [
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'community',
            path: 'parameters',
            routeBasePath: 'parameters',
            sidebarPath: require.resolve('./sidebarsParameters.js'),
            // ... other options
          },
        ],
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'dynamics',
            path: 'dynamics',
            routeBasePath: 'dynamics',
            sidebarPath: require.resolve('./sidebarsDynamics.js'),
            // ... other options
          },
        ],
        async function myPlugin(context, options) {
          return {
            name: "docusaurus-tailwindcss",
            configurePostCss(postcssOptions) {
              // Appends TailwindCSS and AutoPrefixer.
              postcssOptions.plugins.push(require("tailwindcss"));
              postcssOptions.plugins.push(require("autoprefixer"));
              return postcssOptions;
            },
          };
        },      
      ],    
  };
}

module.exports = createConfig;
