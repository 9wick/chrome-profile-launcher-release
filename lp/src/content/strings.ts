export const content = {
	en: {
		siteTitle: "Chrome Profile Launcher",
		description:
			"A lightweight launcher that switches Chrome profiles in one click and opens URLs with the right profile.",
		hero: {
			badge: "macOS first / Windows untested",
			title: ["Switch Chrome profiles", "in a heartbeat."],
			lead: "Move between work, personal, and staging profiles without friction. Set URLs and launch options instantly.",
			actions: {
				primary: { label: "Download now", href: "#download" },
				secondary: {
					label: "View on GitHub",
					href: "https://github.com/9wick/chrome-profile-launcher-release",
				},
			},
			meta: ["No background process", "URL scheme ready", "Launch args auto-set"],
			card: {
				title: "Chrome Profile Launcher",
				items: [
					{ label: "Profile", value: "Work / Personal / Staging" },
					{ label: "Action", value: "open with URL & profile" },
					{ label: "Status", value: "running" },
				],
				footer: "Launch in one click",
			},
		},
		features: {
			title: "Solve profile juggling fast",
			lead: "Bundle account switching, launch parameters, and URL presets into one smooth flow.",
			items: [
				{
					title: "Pick and launch",
					body: "Choose a saved profile and launch immediately. Paths and arguments are handled for you.",
				},
				{
					title: "URLs included",
					body: "Open the exact URL you want with the right profile. Prepare tabs in seconds.",
				},
				{
					title: "Lightweight by design",
					body: "Only the essentials. Small binary, no persistent background process.",
				},
			],
		},
		steps: {
			title: "Ready in 3 steps",
			lead: "Install once and start using it right away.",
			items: [
				{ num: "01", title: "Download the binary", body: "Grab the latest release for your OS." },
				{ num: "02", title: "Register profiles", body: "Add the profile names you already use." },
				{ num: "03", title: "Launch", body: "Open with URLs or launch options as needed." },
			],
		},
		download: {
			title: "Download",
			lead: "Choose the latest release for your OS.",
			items: [
				{
					title: "macOS",
					body: "Universal build for Apple Silicon and Intel.",
					cta: {
						label: "Go to Releases",
						href: "https://github.com/9wick/chrome-profile-launcher-release/releases",
						variant: "primary",
					},
				},
				{
					title: "Windows",
					body: "Download the zip and run the executable.",
					cta: {
						label: "Go to Releases",
						href: "https://github.com/9wick/chrome-profile-launcher-release/releases",
						variant: "primary",
					},
				},
				{
					title: "CLI mode",
					body: "Launch with URLs and integrate into scripts.",
					cta: {
						label: "Usage guide",
						href: "https://github.com/9wick/chrome-profile-launcher-release#readme",
						variant: "secondary",
					},
				},
			],
		},
		faq: {
			title: "FAQ",
			items: [
				{
					q: "Where can I find the profile name?",
					a: "Use the name shown in Chrome's profile switcher.",
				},
				{
					q: "Can I keep my existing shortcuts?",
					a: "Yes. You can continue to use existing shortcuts alongside this launcher.",
				},
				{
					q: "What is the URL scheme for?",
					a: "It lets other apps open a URL with a specific profile.",
				},
			],
		},
		footer: {
			title: "Chrome Profile Launcher",
			lead: "A compact tool for switching between multiple Chrome profiles.",
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
			],
		},
	},
	ja: {
		siteTitle: "Chrome Profile Launcher",
		description:
			"Chromeのプロファイルを1クリックで切り替える軽量ランチャー。URL指定やスクリプト連携にも対応。",
		hero: {
			badge: "macOS対応 / Windows未検証",
			title: ["Chromeのプロファイルを", "一瞬で切り替える。"],
			lead: "仕事とプライベート、複数アカウントを迷わず起動。URLの指定にも対応した軽量ランチャーです。",
			actions: {
				primary: { label: "今すぐダウンロード", href: "#download" },
				secondary: {
					label: "GitHubで見る",
					href: "https://github.com/9wick/chrome-profile-launcher-release",
				},
			},
			meta: ["常駐なし", "URLスキーム対応", "起動パラメータ自動化"],
			card: {
				title: "Chrome Profile Launcher",
				items: [
					{ label: "Profile", value: "Work / Personal / Staging" },
					{ label: "Action", value: "open with URL & profile" },
					{ label: "Status", value: "running" },
				],
				footer: "1クリックで起動",
			},
		},
		features: {
			title: "プロファイル運用の悩みを、最短で解決",
			lead: "複数アカウントの行き来や起動オプションの管理を、手触り良くまとめます。",
			items: [
				{
					title: "選ぶだけで起動",
					body: "保存済みのプロファイルから選ぶだけ。起動パラメータやパス指定は自動で整います。",
				},
				{
					title: "URLまでまとめて",
					body: "特定のURLを一緒に開く設定が可能。複数タブの準備も最初から整います。",
				},
				{
					title: "軽量・シンプル",
					body: "必要な機能だけに絞った小さなバイナリ。起動も常駐もしません。",
				},
			],
		},
		steps: {
			title: "3ステップで準備完了",
			lead: "セットアップはシンプル。インストールしてすぐ使えます。",
			items: [
				{ num: "01", title: "バイナリを取得", body: "GitHub Releases からOSに合わせてダウンロード。" },
				{ num: "02", title: "プロファイルを登録", body: "Chromeのプロファイル名を指定して一覧化。" },
				{ num: "03", title: "起動する", body: "URLや起動オプションも一緒に指定可能。" },
			],
		},
		download: {
			title: "ダウンロード",
			lead: "最新リリースからOSに合ったバイナリを選んでください。",
			items: [
				{
					title: "macOS",
					body: "Apple Silicon / Intel 両対応。",
					cta: {
						label: "Releaseへ進む",
						href: "https://github.com/9wick/chrome-profile-launcher-release/releases",
						variant: "primary",
					},
				},
				{
					title: "Windows",
					body: "zip版を展開して実行できます。",
					cta: {
						label: "Releaseへ進む",
						href: "https://github.com/9wick/chrome-profile-launcher-release/releases",
						variant: "primary",
					},
				},
				{
					title: "CLIモード",
					body: "URL指定で直接起動。スクリプト連携にも。",
					cta: {
						label: "使い方を見る",
						href: "https://github.com/9wick/chrome-profile-launcher-release#readme",
						variant: "secondary",
					},
				},
			],
		},
		faq: {
			title: "よくある質問",
			items: [
				{
					q: "Chromeのプロファイル名はどこで確認できますか？",
					a: "Chromeのユーザー切り替えメニューに表示される名前がそのまま使えます。",
				},
				{
					q: "既存のショートカットと併用できますか？",
					a: "はい。既存のショートカットを残したまま、必要に応じて使い分けできます。",
				},
				{
					q: "URLスキームの用途は？",
					a: "他アプリから指定のプロファイルでURLを開く連携に便利です。",
				},
			],
		},
		footer: {
			title: "Chrome Profile Launcher",
			lead: "複数アカウントを軽やかに切り替えるための小さなツール。",
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
			],
		},
	},
};
