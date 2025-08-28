import type { Metadata } from "next";
import "./globals.css";
import pkg from '../../package.json'

export const metadata: Metadata = {
  title: "GitHub README - RSS 文章卡片",
  description: "这是一个实用的工具，可以将你的 RSS 订阅源中的最新文章生成美观的展示图片，并轻松嵌入到 GitHub 个人主页或项目文档的 README 文件中。",
  applicationName: "github-readme-rss-recent-article", // 应用名称
  authors: { name: pkg.author.name, url: pkg.author.url }, // 网站作者
  keywords: 'RSS,Github,个人主页,README', // 网站关键词
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://rss-article.baiwumm.com/',
    title: "GitHub README - RSS 文章卡片",
    description: "这是一个实用的工具，可以将你的 RSS 订阅源中的最新文章生成美观的展示图片，并轻松嵌入到 GitHub 个人主页或项目文档的 README 文件中。",
    siteName: "github-readme-rss-recent-article",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 引入字体文件 */}
      <head>
        <link rel="stylesheet" href="https://cdn.baiwumm.com/fonts/MapleMono-CN-Regular/result.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
