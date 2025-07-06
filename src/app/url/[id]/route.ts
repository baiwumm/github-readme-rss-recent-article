import { NextResponse, NextRequest } from 'next/server';
import Parser from 'rss-parser';
import { RssItem } from '@/lib/type';
import pkg from '../../../../package.json'

const parser = new Parser();

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { pathname } = new URL(request.url);
    const id = parseInt(pathname.split('/').pop() || '0');
    const feed = await parser.parseURL(process.env.RSS_URL as string);

    if (!feed.items || feed.items.length === 0) {
      return new NextResponse('No articles found', { status: 404 });
    }

    // 确保ID在有效范围内
    const articleIndex = Math.min(Number(id), feed.items.length - 1);
    const item = feed.items[articleIndex] as RssItem;

    // 直接返回URL字符串（非JSON）
    return new NextResponse(item?.link || pkg.author.url, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600' // 缓存1小时
      }
    });
  } catch {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

