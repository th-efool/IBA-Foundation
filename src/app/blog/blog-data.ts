export * from './types';
import { BlogPost } from './types';
import { POST_01 } from './posts/post-01';
import { POST_02 } from './posts/post-02';
import { POST_03 } from './posts/post-03';
import { POST_04 } from './posts/post-04';
import { POST_05 } from './posts/post-05';
import { POST_06 } from './posts/post-06';
import { POST_07 } from './posts/post-07';
import { POST_08 } from './posts/post-08';
import { POST_09 } from './posts/post-09';
import { POST_10 } from './posts/post-10';
import { POST_11 } from './posts/post-11';
import { POST_12 } from './posts/post-12';

export const BLOG_POSTS: BlogPost[] = [
  POST_01,
  POST_02,
  POST_03,
  POST_04,
  POST_05,
  POST_06,
  POST_07,
  POST_08,
  POST_09,
  POST_10,
  POST_11,
  POST_12,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}
