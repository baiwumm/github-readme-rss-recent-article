import { Icon } from '@iconify/react'
import pkg from "../../package.json";

export default function Home() {
  return (
    <div className="max-w-7xl m-auto grid items-center justify-items-center min-h-screen p-8 gap-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[12px] items-center w-full">
        <h2 className="text-lg sm:text-xl font-bold truncate text-gray-800 dark:text-gray-100">
          github-readme-rss-recent-article
        </h2>
        <div>这是一个实用的工具，可以将你的 RSS 订阅源中的最新文章生成美观的展示图片，并轻松嵌入到 GitHub 个人主页或项目文档的 README 文件中。</div>
        <h2 className="text-lg sm:text-xl font-bold truncate text-gray-800 dark:text-gray-100">
          主要功能
        </h2>
        <ol className="list-inside list-decimal text-base/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">📰 自动获取 RSS 订阅源的最新文章</li>
          <li className="mb-2 tracking-[-.01em]">🖼️ 生成包含文章标题、摘要和来源的可视化卡片</li>
          <li className="tracking-[-.01em]">🎨 可自定义卡片样式和布局</li>
        </ol>
        <h2 className="text-lg sm:text-xl font-bold truncate text-gray-800 dark:text-gray-100">
          效果预览
        </h2>
        <div className="grid grid-cols-1 w-full">
          {[0, 1, 2, 3, 4].map((id) => (
            <a
              key={id}
              href={`/url/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-[1.02]"
            >
              <img
                src={`/rss/${id}`}
                alt={`Article Card ${id}`}
                className="w-full"
              />
            </a>
          ))}
        </div>
      </main>
      <div className="flex items-center gap-6">
        <a
          href={pkg.repository.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-1.5 rounded-full transition-colors duration-200 text-gray-400 hover:text-gray-600 hover:bg-gray-200 dark:text-gray-500 box-content"
        >
          <Icon icon="ri:github-line" className="w-5 h-5" />
        </a>
        <a
          href={pkg.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-1.5 rounded-full transition-colors duration-200 text-gray-400 hover:text-gray-600 hover:bg-gray-200 dark:text-gray-500 box-content"
        >
          <Icon icon="carbon:home" className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${pkg.email}`}
          className="inline-flex items-center justify-center p-1.5 rounded-full transition-colors duration-200 text-gray-400 hover:text-gray-600 hover:bg-gray-200 dark:text-gray-500 box-content"
        >
          <Icon icon="carbon:email" className="w-5 h-5" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-2 text-base/6 text-gray-400">
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:hover:text-gray-600 transition-colors"
        >
          粤ICP备2023007649号
        </a>
        |
        <a
          href="https://beian.mps.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:hover:text-gray-600 transition-colors"
        >
          粤公网安备44030402006402号
        </a>
      </div>
      <a href={pkg.repository.url} target="_blank" rel="noopener noreferrer" className="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style={{ fill: '#151513', color: '#fff', position: 'absolute', top: 0, border: 0, right: 0, }} aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" /><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: '130px 106px' }} className="octo-arm" /><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body" /></svg></a>
    </div>
  );
}
