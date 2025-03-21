'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPost, Post } from '@/sanityClient';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const fetchedPost = await getPost(params.slug);
        setPost(fetchedPost);
        setLoading(false);
        
        // Update page title
        if (fetchedPost) {
          document.title = `${fetchedPost.title} - Branislav Bednár`;
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(true);
        setLoading(false);
      }
    }

    fetchPost();
  }, [params.slug]);

  // Function to render post body (simplified)
  function renderPostBody(body: any): string {
    if (!body || !Array.isArray(body)) {
      return '<p>No content available</p>';
    }
    
    return body
      .map((block: any) => {
        // Handle different block types
        if (block._type === 'block') {
          const style = block.style || 'normal';
          
          // Convert marks (bold, italic, etc.)
          let text = block.children
            .map((child: any) => {
              let text = child.text;
              
              if (child.marks && child.marks.length > 0) {
                child.marks.forEach((mark: string) => {
                  if (mark === 'strong') text = `<strong>${text}</strong>`;
                  if (mark === 'em') text = `<em>${text}</em>`;
                  // Add more mark types as needed
                });
              }
              
              return text;
            })
            .join('');
          
          // Apply block style
          if (style === 'h1') return `<h1>${text}</h1>`;
          if (style === 'h2') return `<h2>${text}</h2>`;
          if (style === 'h3') return `<h3>${text}</h3>`;
          if (style === 'h4') return `<h4>${text}</h4>`;
          if (style === 'blockquote') return `<blockquote>${text}</blockquote>`;
          
          return `<p>${text}</p>`;
        }
        
        // Handle image blocks
        if (block._type === 'image' && block.asset) {
          return `<figure>
            <img src="https://cdn.sanity.io/images/your-project-id/production/${block.asset._ref
              .replace('image-', '')
              .replace('-jpg', '.jpg')
              .replace('-png', '.png')
              .replace('-webp', '.webp')}" 
              alt="${block.alt || ''}" class="content-image">
            ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}
          </figure>`;
        }
        
        return '';
      })
      .join('');
  }

  return (
    <main>
      
      {loading && (
        <div id="single-post-container">
          <div className="post-loading">Loading post...</div>
        </div>
      )}
      
      {error && (
        <div id="single-post-container">
          <div className="error-message">
            <h2>Error Loading Post</h2>
            <p>Sorry, we couldn't load the blog post at this time.</p>
            <p>Please try again later or <Link href="/blog">return to the blog</Link>.</p>
          </div>
        </div>
      )}
      
      {!loading && !error && !post && (
        <div id="single-post-container">
          <div className="error-message">Post not found</div>
        </div>
      )}
      
      {!loading && !error && post && (
        <>
          <div id="single-post-container">
            <article className="single-post">
              <h1 className="post-title">{post.title}</h1>
              
              <div className="post-meta">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              
              {post.mainImage && (
                <Image 
                  src={`https://cdn.sanity.io/images/your-project-id/production/${post.mainImage.asset._ref
                    .replace('image-', '')
                    .replace('-jpg', '.jpg')
                    .replace('-png', '.png')
                    .replace('-webp', '.webp')}`}
                  alt={post.title}
                  className="post-featured-image"
                  width={800}
                  height={450}
                />
              )}
              
              <div 
                className="post-content"
                dangerouslySetInnerHTML={{ __html: renderPostBody(post.body) }}
              />
            </article>
          </div>
          
          <div id="back-to-blog">
            <Link href="/blog" className="back-link">
              ← Back to all posts
            </Link>
          </div>
        </>
      )}
    </main>
  );
}