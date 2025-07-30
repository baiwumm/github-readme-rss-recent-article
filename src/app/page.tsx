import { Icon } from '@iconify/react'
import pkg from "../../package.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
              <Icon icon="ri:rss-line" className="w-4 h-4 mr-2" />
              RSS 文章展示工具
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GitHub README
              </span>
              <br />
              RSS 文章卡片
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              将你的 RSS 订阅源中的最新文章生成美观的展示图片，轻松嵌入到 GitHub 个人主页或项目文档的 README 文件中
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            主要功能
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            简单易用，功能强大的 RSS 文章展示解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon icon="ri:rss-line" className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              自动获取文章
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              自动获取 RSS 订阅源的最新文章，实时更新内容
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon icon="ri:image-line" className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              生成可视化卡片
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              生成包含文章标题、摘要和来源的精美可视化卡片
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon icon="ri:palette-line" className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              自定义样式
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              可自定义卡片样式和布局，满足不同需求
            </p>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              效果预览
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              查看生成的文章卡片效果
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[0, 1, 2, 3, 4].map((id) => (
              <div key={id} className="group">
                <a
                  href={`/url/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl shadow-lg hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] bg-white dark:bg-gray-800"
                >
                    <img
                      src={`/rss/${id}`}
                      alt={`Article Card ${id}`}
                      className="w-full h-full object-cover"
                    />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href={pkg.repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                title="GitHub"
              >
                <Icon icon="ri:github-line" className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </a>
              <a
                href={pkg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                title="主页"
              >
                <Icon icon="carbon:home" className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </a>
              <a
                href={`mailto:${pkg.email}`}
                className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                title="邮箱"
              >
                <Icon icon="carbon:email" className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                粤ICP备2023007649号
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="https://beian.mps.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                粤公网安备44030402006402号
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* GitHub Corner */}
      <a 
        href={pkg.repository.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="github-corner fixed top-0 right-0 z-50" 
        aria-label="View source on GitHub"
      >
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 250 250" 
          className="fill-gray-800 dark:fill-white text-white dark:text-gray-800" 
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          <path 
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" 
            fill="currentColor" 
            className="octo-arm origin-[130px_106px]" 
          />
          <path 
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" 
            fill="currentColor" 
            className="octo-body" 
          />
        </svg>
      </a>
    </div>
  );
}