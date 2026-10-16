import { getAllBlogPosts } from "../blog/blog-data";
import { getAllPlaybooks } from "../playbooks/playbooks-data";

export async function GET() {
  const baseUrl = "https://ibafoundation.org";
  const posts = getAllBlogPosts();
  const playbooks = getAllPlaybooks();

  const allItems = [
    ...posts.map((post) => ({
      title: post.title,
      description: post.metaDescription,
      link: `${baseUrl}/blog/${post.slug}`,
      pubDate: new Date(post.date).toUTCString(),
      category: post.category,
    })),
    ...playbooks.map((pb) => ({
      title: pb.title,
      description: pb.summary,
      link: `${baseUrl}/playbooks/${pb.slug}`,
      pubDate: new Date("2026-10-15").toUTCString(),
      category: "Engineering Playbook",
    })),
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>IBA Foundation — Essays, Research &amp; Builder Playbooks</title>
    <link>${baseUrl}</link>
    <description>Rigorous monographs on talent economics, builder discipline, and venture-scale engineering from IBA Foundation.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${allItems
      .map(
        (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description><![CDATA[${item.description}]]></description>
      <category>${item.category}</category>
      <pubDate>${item.pubDate}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
