export type RssItem = {
  title: string;
  description: string;
  date: string;
  url: string;
  thumbnail: string;
  enclosure?: {
    url?: string;
  };
  contentSnippet?: string;
  content?: string;
  pubDate?: string;
  link?: string;
}