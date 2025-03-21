'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts, Post } from '@/sanityClient';

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(true);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main>
      <div className="w3-row" id="blog-header">
        <h1>Blog</h1>
        <p className="blog-subtitle">My thoughts on software development and more.</p>
      </div>

      <div className="w3-row" id="blog-content">
        <div id="posts-container">
          {loading && <div className="loading">Loading posts...</div>}
          
          {error && (
            <div className="error-message">
              <p>Sorry, we couldn't load the blog posts at this time.</p>
              <p>Please try again later.</p>
            </div>
          )}
          
          {!loading && !error && posts.length === 0 && (
            <div className="no-posts">No blog posts found.</div>
          )}
          
          {!loading && !error && posts.length > 0 && posts.map((post) => {
            // Format date
            const publishDate = new Date(post.publishedAt);
            const formattedDate = publishDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
            
            return (
              <div className="blog-post" key={post._id}>
                <article>
                  {post.mainImage && (
                    <Image 
                      src={`https://cdn.sanity.io/images/your-project-id/production/${post.mainImage.asset._ref
                        .replace('image-', '')
                        .replace('-jpg', '.jpg')
                        .replace('-png', '.png')
                        .replace('-webp', '.webp')}`}
                      alt={post.title}
                      className="post-image"
                      width={800}
                      height={450}
                    />
                  )}
                  <h3>{post.title}</h3>
                  <div className="post-date">{formattedDate}</div>
                  <div className="post-excerpt">{post.excerpt || ''}</div>
                  <Link href={`/blog/${post.slug.current}`} className="read-more">
                    Read more
                  </Link>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}