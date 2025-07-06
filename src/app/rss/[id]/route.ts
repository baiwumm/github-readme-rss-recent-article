import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { generateArticleCard, extractThumbnail } from '@/lib/generateSvg';
import { RssItem } from '@/lib/type';

const parser = new Parser();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const feed = await parser.parseURL(process.env.RSS_URL as string);

    if (!feed.items || feed.items.length === 0) {
      return new NextResponse('No articles found', { status: 404 });
    }

    // 确保ID在有效范围内
    const articleIndex = Math.min(Number(id), feed.items.length - 1);
    const item = feed.items[articleIndex] as RssItem;

    // 提取文章数据
    const article: RssItem = {
      title: item.title || '无标题',
      description: item.contentSnippet || item.description || '无描述内容',
      date: item.pubDate || new Date().toISOString(),
      url: item.link || '#',
      thumbnail: extractThumbnail(item) || 'https://picsum.photos/300/200'
    };

    const svg = generateArticleCard(article);

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600' // 缓存1小时
      }
    });
  } catch {
    return new NextResponse('Failed to generate article card', { status: 500 });
  }
}

