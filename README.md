<div align="center">
  <h1>🚀 GitHub README RSS Recent Article</h1>
  <p>将你的 RSS 订阅源中的最新文章生成美观的展示图片，轻松嵌入到 GitHub 个人主页或项目文档的 README 文件中</p>
  
  <p>
  <a href="https://github.com/baiwumm/github-readme-rss-recent-article/stargazers">
      <img src="https://img.shields.io/github/stars/baiwumm/github-readme-rss-recent-article?style=flat-square&logo=github&color=blue" alt="GitHub stars">
    </a>
    <a href="https://nextjs.org/">
      <img src="https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js" alt="Next.js">
    </a>
    <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS">
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript" alt="TypeScript">
    </a>
    <a href="./LICENSE" target="_blank">
    <img alt="LICENSE" src="https://img.shields.io/badge/license-MIT-blue">
  </a>
  </p>
</div>

---

## ✨ 特性

- 📰 **自动获取文章** - 自动获取 RSS 订阅源的最新文章，实时更新内容
- 🖼️ **生成可视化卡片** - 生成包含文章标题、摘要和来源的精美可视化卡片
- 🎨 **自定义样式** - 可自定义卡片样式和布局，满足不同需求
- 📱 **响应式设计** - 完美适配桌面端和移动端
- ⚡ **高性能** - 基于 Next.js 15 构建，性能优异
- 🔧 **易于集成** - 简单的 API 调用即可生成卡片

## 🎯 效果预览
<details open>
<summary>点击折叠</summary>

<div align="center">

<a target="_blank" href="https://rss-article.baiwumm.com/url/0">
<img src="https://rss-article.baiwumm.com/rss/0" />
</a>

<a target="_blank" href="https://rss-article.baiwumm.com/url/1">
<img src="https://rss-article.baiwumm.com/rss/1" />
</a>

<a target="_blank" href="https://rss-article.baiwumm.com/url/2">
<img src="https://rss-article.baiwumm.com/rss/2" />
</a>

<a target="_blank" href="https://rss-article.baiwumm.com/url/3">
<img src="https://rss-article.baiwumm.com/rss/3" />
</a>

<a target="_blank" href="https://rss-article.baiwumm.com/url/4">
<img src="https://rss-article.baiwumm.com/rss/4" />
</a>
</div>

</details>

## 🚀 快速开始

### 📋 前置要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 🛠️ 安装

1. **克隆项目**
   ```bash
   git clone https://github.com/baiwumm/github-readme-rss-recent-article.git
   cd github-readme-rss-recent-article
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   yarn install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   # 或
   yarn dev
   ```

4. **访问应用**
   
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 📖 使用方法

### 基本用法

在你的 README.md 文件中添加以下代码：

```markdown
![最新文章](https://your-domain.com/rss/0)
```

### API 端点

- `GET /rss/{id}` - 获取指定 ID 的文章卡片图片
- `GET /url/{id}` - 获取指定 ID 的文章原文链接

## 🏗️ 项目结构

```
github-readme-rss-recent-article/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # 全局样式
│   │   ├── layout.tsx         # 根布局
│   │   ├── page.tsx           # 首页
│   │   ├── rss/               # RSS API 路由
│   │   └── url/               # URL 重定向路由
│   └── lib/                   # 工具库
│       └── generateSvg.ts     # SVG 生成逻辑
├── public/                    # 静态资源
├── package.json              # 项目配置
└── README.md                 # 项目文档
```

## 🔧 配置

创建 `.env` 文件并添加以下配置：

```env
# RSS 订阅源配置
RSS_URL='https://baiwumm.com/rss.xml'
```

## 🎨 自定义样式

修改 `src/lib/generateSvg.ts` 文件来自定义卡片模板。

## 🚀 部署

### Vercel 部署

1. 将项目推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 配置环境变量
4. 点击部署

### 手动部署

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

## 📄 许可证

本项目基于 [MIT 许可证]( LICENSE) 开源。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Iconify](https://iconify.design/) - 图标库
- [RSS Parser](https://github.com/rbren/rss-parser) - RSS 解析器

## 📞 联系方式

- 作者：白雾茫茫丶
- 邮箱：me@baiwumm.com
- 博客：[https://baiwumm.com](https://baiwumm.com)
- GitHub：[@baiwumm](https://github.com/baiwumm)

---

<div align="center">
  <p>如果这个项目对你有帮助，请给它一个 ⭐️</p>
  <p>Made with ❤️ by <a href="https://github.com/baiwumm">白雾茫茫丶</a></p>
</div>