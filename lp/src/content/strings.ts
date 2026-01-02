import settingViewImage from "../assets/setting_view.png";
import heroImage from "../assets/SS20260102155135@2x.png";

export const content = {
	en: {
		siteTitle: "Chrome Profile Launcher",
		description:
			"Choose the right Chrome profile when you click links from email, Slack, or Notion. Never open with the wrong account again.",
		hero: {
			badge: "macOS first / Windows untested",
			title: ["Choose your profile", "before you open."],
			lead: "Open links from email, Slack, and Notion with the right Chrome profile. Keep work and personal accounts separate, effortlessly.",
			actions: {
				primary: { label: "Download now", href: "#download" },
				secondary: {
					label: "View on GitHub",
					href: "https://github.com/9wick/chrome-profile-launcher-release",
				},
			},
			meta: ["No background process"],
			image: {
				src: heroImage.src,
				alt: "Chrome Profile Launcher sample screen",
				width: heroImage.width,
				height: heroImage.height,
			},
		},
		features: {
			title: "Never open the wrong profile again",
			lead: "One setup, every link is handled correctly.",
			items: [
				{
					title: "Select on every click",
					body: "Click any link, choose your profile, and it opens automatically. Works across email, Slack, Notion, and any app.",
				},
				{
					title: "Set as default browser",
					body: "Set this app as your default browser. When you click a link, it shows your profiles and launches Chrome with the one you choose.",
				},
				{
					title: "Lightweight and simple",
					body: "Small binary, no persistent background process. Just the essentials.",
				},
			],
		},
		steps: {
			title: "Ready in 3 steps",
			lead: "Set it up once and use it everywhere.",
			items: [
				{ num: "01", title: "Download the app", body: "Grab the latest release for your OS." },
				{ num: "02", title: "Set as default browser", body: "Click the button in settings to set as your default browser." },
				{ num: "03", title: "Click and choose", body: "Click any link, select your profile, and start browsing." },
			],
			image: {
				src: settingViewImage.src,
				alt: "Chrome Profile Launcher settings screen",
				width: settingViewImage.width,
				height: settingViewImage.height,
			},
		},
		download: {
			title: "Download",
			lead: "Choose the latest release for your OS.",
			items: [
				{
					title: "macOS",
					body: "Universal build for Apple Silicon and Intel.",
					cta: {
						label: "Download for macOS",
						href: "https://github.com/9wick/chrome-profile-launcher-release/releases/latest/download/Chrome.Profile.Launcher.dmg",
						variant: "primary",
					},
				},
				{
					title: "Windows",
					body: "Download the zip and run the executable.",
					cta: {
						label: "Download for Windows",
						href: "https://github.com/9wick/chrome-profile-launcher-release/releases/latest/download/chrome-profile-launcher-x86_64-pc-windows-gnu.msi",
						variant: "primary",
					},
				},
			],
		},
		faq: {
			title: "FAQ",
			items: [
				{
					q: "Do I need to set this as my default browser?",
					a: "Yes. Setting it as your default browser allows it to intercept link clicks and show the profile selector.",
				},
				{
					q: "Where can I find the profile name?",
					a: "Use the name shown in Chrome's profile switcher.",
				},
				{
					q: "Which browsers and OS are supported?",
					a: "Currently supports Chrome on macOS. Windows support is untested but may work.",
				},
			],
		},
		footer: {
			title: "Chrome Profile Launcher",
			lead: "Choose the right profile every time you click a link.",
			links: [
				{ label: "GitHub", href: "https://github.com/9wick/chrome-profile-launcher-release" },
				{
					label: "Releases",
					href: "https://github.com/9wick/chrome-profile-launcher-release/releases",
				},
				{
					label: "Issues",
					href: "https://github.com/9wick/chrome-profile-launcher-release/issues",
				},
				{ label: "Terms", href: "/terms" },
			],
		},
	},
	ja: {
		siteTitle: "Chrome Profile Launcher",
		description:
			"メール、Slack、Notionからのリンクを正しいChromeプロファイルで開く。間違ったアカウントで開くことがなくなります。",
		hero: {
			badge: "macOS対応 / Windows未検証",
			title: ["ブラウザで開く前に、", "プロファイルを選ぶ。"],
			lead: "メール、Slack、Notionからのリンクを正しいChromeプロファイルで開く。仕事とプライベート、複数アカウントの使い分けを簡単に。",
			actions: {
				primary: { label: "今すぐダウンロード", href: "#download" },
				secondary: {
					label: "GitHubで見る",
					href: "https://github.com/9wick/chrome-profile-launcher-release",
				},
			},
			meta: ["常駐なし"],
			image: {
				src: heroImage.src,
				alt: "Chrome Profile Launcherのサンプル画面",
				width: heroImage.width,
				height: heroImage.height,
			},
		},
		features: {
			title: "もう間違ったプロファイルで開かない",
			lead: "一度設定すれば、すべてのリンクで正しく機能します。",
			items: [
				{
					title: "クリックするたびに選択",
					body: "どんなリンクでも、クリックするとプロファイルを選択でき、自動で開きます。メール、Slack、Notion、あらゆるアプリで機能します。",
				},
				{
					title: "デフォルトブラウザに設定",
					body: "このアプリをデフォルトブラウザに設定します。リンクをクリックすると、プロファイル選択画面が表示され、選んだプロファイルでChromeが起動します。",
				},
				{
					title: "軽量・シンプル",
					body: "小さなバイナリ、常駐プロセスなし。必要な機能だけを提供します。",
				},
			],
		},
		steps: {
			title: "3ステップで準備完了",
			lead: "一度設定すれば、どこでも使えます。",
			items: [
				{ num: "01", title: "アプリをダウンロード", body: "OSに合った最新リリースを取得します。" },
				{ num: "02", title: "デフォルトブラウザに設定", body: "設定画面のボタンをクリックして、デフォルトブラウザに設定します。" },
				{ num: "03", title: "クリックして選択", body: "リンクをクリックし、プロファイルを選んで、ブラウジングを開始します。" },
			],
			image: {
				src: settingViewImage.src,
				alt: "Chrome Profile Launcher設定画面",
				width: settingViewImage.width,
				height: settingViewImage.height,
			},
		},
		download: {
			title: "ダウンロード",
			lead: "最新リリースからOSに合ったバイナリを選んでください。",
			items: [
				{
					title: "macOS",
					body: "Apple Silicon / Intel 両対応。",
					cta: {
						label: "macOS版をダウンロード",
						href: "https://github.com/9wick/chrome-profile-launcher-release/releases/latest/download/Chrome.Profile.Launcher.dmg",
						variant: "primary",
					},
				},
				{
					title: "Windows",
					body: "zip版を展開して実行できます。",
					cta: {
						label: "Windows版をダウンロード",
						href: "https://github.com/9wick/chrome-profile-launcher-release/releases/latest/download/chrome-profile-launcher-x86_64-pc-windows-gnu.msi",
						variant: "primary",
					},
				},
			],
		},
		faq: {
			title: "よくある質問",
			items: [
				{
					q: "デフォルトブラウザに設定する必要がありますか？",
					a: "はい。デフォルトブラウザに設定することで、リンククリックを捕捉し、プロファイル選択画面を表示できます。",
				},
				{
					q: "Chromeのプロファイル名はどこで確認できますか？",
					a: "Chromeのユーザー切り替えメニューに表示される名前がそのまま使えます。",
				},
				{
					q: "対応しているブラウザとOSは？",
					a: "現在はmacOS上のChromeに対応しています。Windowsは未検証ですが、動作する可能性があります。",
				},
			],
		},
		footer: {
			title: "Chrome Profile Launcher",
			lead: "リンクをクリックするたびに、正しいプロファイルを選択。",
			links: [
				{ label: "GitHub", href: "https://github.com/9wick/chrome-profile-launcher-release" },
				{
					label: "Releases",
					href: "https://github.com/9wick/chrome-profile-launcher-release/releases",
				},
				{
					label: "Issues",
					href: "https://github.com/9wick/chrome-profile-launcher-release/issues",
				},
				{ label: "利用規約", href: "/ja/terms" },
			],
		},
	},
};
