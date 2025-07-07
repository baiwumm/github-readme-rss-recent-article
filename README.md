## github-readme-rss-recent-article
这是一个实用的工具，可以将你的 RSS 订阅源中的最新文章生成美观的展示图片，并轻松嵌入到 GitHub 个人主页或项目文档的 README 文件中。

## 主要功能
- 📰 自动获取 RSS 订阅源的最新文章

- 🖼️ 生成包含文章标题、摘要和来源的可视化卡片

- 🎨 可自定义卡片样式和布局


## 效果预览
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

## 快速开始
1. fork 仓库，在 `.env` 文件中添加你的 `RSS` 订阅地址：
```
RSS_URL = 'https://baiwumm.com/rss.xml'
```

2. 在 `README` 文件中
```
<a target="_blank" href="https://rss-article.baiwumm.com/url/{article-index}">
<img src="https://rss-article.baiwumm.com/rss/{article-index}" />
</a>
```
`article-index`：订阅的 `RSS` 索引

## 项目灵感
[github-readme-medium-recent-article](https://github.com/bxcodec/github-readme-medium-recent-article)

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=baiwumm/github-readme-rss-recent-article&type=Date)](https://star-history.com/#baiwumm/github-readme-rss-recent-article&Date)