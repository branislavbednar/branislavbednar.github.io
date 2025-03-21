import { getPosts, Post } from './sanityClient';

// Load blog posts when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  if (window.location.pathname.includes('blog.html')) {
    try {
      await loadBlogPosts();
    } catch (error) {
      console.error('Error loading blog posts:', error);
      showErrorMessage();
    }
  }
});

async function loadBlogPosts(): Promise<void> {
  const postsContainer = document.getElementById('posts-container');
  if (!postsContainer) return;
  
  // Show loading state
  postsContainer.innerHTML = '<div class="loading">Loading posts...</div>';
  
  try {
    const posts = await getPosts();
    
    if (posts.length === 0) {
      postsContainer.innerHTML = '<div class="no-posts">No blog posts found.</div>';
      return;
    }
    
    // Clear loading state and display posts
    postsContainer.innerHTML = '';
    
    posts.forEach(post => {
      postsContainer.appendChild(createPostElement(post));
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    showErrorMessage();
  }
}

function createPostElement(post: Post): HTMLElement {
  const postEl = document.createElement('div');
  postEl.className = 'blog-post';
  
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
      alt="${post.title}" class="post-image">` : '';
  
  postEl.innerHTML = `
    <article>
      ${imageHtml}
      <h3>${post.title}</h3>
      <div class="post-date">${formattedDate}</div>
      <div class="post-excerpt">${post.excerpt || ''}</div>
      <a href="/post.html?slug=${post.slug.current}" class="read-more">Read more</a>
    </article>
  `;
  
  return postEl;
}

function showErrorMessage(): void {
  const postsContainer = document.getElementById('posts-container');
  if (postsContainer) {
    postsContainer.innerHTML = `
      <div class="error-message">
        <p>Sorry, we couldn't load the blog posts at this time.</p>
        <p>Please try again later.</p>
      </div>
    `;
  }
}