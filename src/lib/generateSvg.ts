import { RssItem } from './type'
export function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export function formatGMTDate(gmtString: string): string {
  const date = new Date(gmtString);

  if (isNaN(date.getTime())) {
    return "无效日期";
  }

  // 添加8小时（转为北京时间）
  date.setHours(date.getHours() + 8);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}年${month}月${day}日 ${hours}:${minutes}`;
}

async function urlToBase64(url: string) {
  const response = await fetch(url);
  // 使用 .arrayBuffer() 替代 .buffer()
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return `data:${response.headers.get('content-type')};base64,${buffer.toString('base64')}`;
}

export async function generateArticleCard(item: {
  title: string;
  description: string;
  date: string;
  url: string;
  thumbnail: string;
}) {
  // 转义所有文本内容
  const safeTitle = escapeXml(item.title);
  const safeDescription = escapeXml(item.description);
  const safeDate = formatGMTDate(escapeXml(item.date));
  const safeUrl = escapeXml(item.url);
  const safeThumbnail = await urlToBase64(escapeXml(item.thumbnail));
  return `
<svg fill="none" width="100%" height="100%" viewBox="0 0 1000 140" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: sans-serif;
        }
        @keyframes gradientBackground {
          0% {
            background-position-x: 0%;
          }
          100% {
            background-position-x: 100%;
          }
        }
        .flex {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .outer-container {
          width: 100%;
          height: 100%;
          min-height: 140px;
        }
        .container {
          height: 100%;
          width: 100%;
          border: 1px solid rgba(0,0,0,.2);
          padding: 10px 20px;
          border-radius: 10px;
          background: rgb(255,255,255);
          background: linear-gradient(60deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 47%, rgba(246,246,246,1) 50%, rgba(255,255,255,1) 53%, rgba(255,255,255,1) 100%);
          background-size: 600% 400%;
          animation: gradientBackground 3s ease infinite;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        img {
          margin-right: 10px;
          width: 150px;
          height: 100%;
          min-height: 98px;
          object-fit: cover;
        }
        .right {
          flex: 1;
          min-width: 0;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        p {
          line-height: 1.5;
          color: #555;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        h3 {
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        small {
          color: #888;
          display: block;
          margin-top: 5px;
          margin-bottom: 8px;
        }
      </style>
      <div class="outer-container flex">
        <a class="container flex" href="${safeUrl}" target="_blank">
          <img src="${safeThumbnail}"/>
          <div class="right">
            <h3>${safeTitle}</h3>
            <small>${safeDate}</small>
            <p>${safeDescription}</p>
          </div>
        </a>
      </div>
    </div>
  </foreignObject>
</svg>
`;
}

export function getCdnUrlFromProxy(proxyUrl: string): string | null {
  try {
    const url = new URL(proxyUrl);
    const uriParam = url.searchParams.get("uri");
    return uriParam ? decodeURIComponent(uriParam) : null;
  } catch {
    return null;
  }
}

// 从RSS内容中提取缩略图
export function extractThumbnail(item: RssItem): string | null {
  if (item.enclosure?.url) return item.enclosure.url;

  // 尝试从内容中提取第一个图片
  const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch) return imgMatch[1];

  return null;
}