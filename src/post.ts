import { getPost } from './sanityClient';

document.addEventListener('DOMContentLoaded', async () => {
  if (window.location.pathname.includes('post.html')) {
    try {
      await loadSinglePost();
    } catch (error) {
      console.error('Error loading post:', error);
      showErrorMessage();
    }
  }
});

async function loadSinglePost(): Promise<void> {
  const postContainer = document.getElementById('single-post-container');
  if (!postContainer) return;
  
  // Get slug from URL
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  
  if (!slug) {
    postContainer.innerHTML = '<div class="error-message">Post not found</div>';
    return;
  }
  
  try {
    const post = await getPost(slug);
    
    if (!post) {
      postContainer.innerHTML = '<div class="error-message">Post not found</div>';
      return;
    }
    
    // Format date
    const publishDate = new Date(post.publishedAt);
    const formattedDate = publishDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Image HTML if image exists
    const imageHtml = post.mainImage ? 
      `<img src="https://cdn.sanity.io/images/your-project-id/production/${post.mainImage.asset._ref
        .replace('image-', '')
        .replace('-jpg', '.jpg')
        .replace('-png', '.png')
        .replace('-webp', '.webp')}" 
        alt="${post.title}" class="post-featured-image">` : '';
    
    // Update page title
    document.title = `${post.title} - Branislav Bednár`;
    
    // Display the post
    postContainer.innerHTML = `
      <article class="single-post">
        <h1 class="post-title">${post.title}</h1>
        <div class="post-meta">${formattedDate}</div>
        ${imageHtml}
        <div class="post-content">
          ${renderPostBody(post.body)}
        </div>
      </article>
    `;
  } catch (error) {
    console.error('Error fetching post:', error);
    showErrorMessage();
  }
}

function renderPostBody(body: any): string {
  // This is a simplified implementation
  // For a complete solution, you should use a Sanity block content renderer
  // like @sanity/block-content-to-html or @portabletext/react if using React
  
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

function showErrorMessage(): void {
  const postContainer = document.getElementById('single-post-container');
  if (postContainer) {
    postContainer.innerHTML = `
      <div class="error-message">
        <h2>Error Loading Post</h2>
        <p>Sorry, we couldn't load the blog post at this time.</p>
        <p>Please try again later or <a href="blog.html">return to the blog</a>.</p>
      </div>
    `;
  }
}