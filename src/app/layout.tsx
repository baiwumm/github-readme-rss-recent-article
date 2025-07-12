import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import pkg from '../../package.json'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "github-readme-rss-recent-article",
  description: "这是一个实用的工具，可以将你的 RSS 订阅源中的最新文章生成美观的展示图片，并轻松嵌入到 GitHub 个人主页或项目文档的 README 文件中。",
  applicationName: "github-readme-rss-recent-article", // 应用名称
  authors: { name: pkg.author.name, url: pkg.author.url }, // 网站作者
  keywords: 'RSS,Github,个人主页,README', // 网站关键词
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Script
        src="https://analytics.baiwumm.com/tracker.min.js"
        data-website-id="Hello-Rss-Article"
      />
    </html>
  );
}
