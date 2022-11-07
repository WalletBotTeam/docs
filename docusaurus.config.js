// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WalletBot',
  tagline: 'Tagline here',
  url: 'https://docs.walletbot.pro',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "walletbotteam", // Usually your GitHub org/user name.
	projectName: "docs", // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	scripts: ["https://walletbot.instatus.com/widget/script.js"],

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
				},
				// blog: {
				//   showReadingTime: true,
				//   // Please change this to your repo.
				//   // Remove this to remove the "edit this page" links.
				//   // editUrl:
				//   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
			navbar: {
				title: "WalletBot",
				logo: {
					alt: "Logo",
					src: "https://github.com/WalletBotTeam/.github/raw/main/WalletBot.png?raw=true",
				},
				items: [
					{
						type: "doc",
						docId: "home",
						position: "left",
						label: "Documentation",
					},
					{
						to: "https://status.walletbot.pro",
						label: "Status",
						position: "left",
					},
					{
						href: "https://github.com/walletbotteam",
						className: 'navbar-item-github',
						position: "right",
					},
					{
						href: "https://discord.gg/rgrchNDWup",
						className: 'navbar-item-discord',
						position: "right",
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
}

module.exports = config
