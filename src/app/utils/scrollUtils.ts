'use client';

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    // Get the navbar height to offset the scroll position
    const navbar = document.querySelector('.w3-top');
    const navbarHeight = navbar ? navbar.clientHeight : 0;
    
    // Calculate position accounting for navbar height
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra padding
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

export function setupSmoothScrolling() {
  // Only apply to links that start with hash (#) and not full paths like /blog
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle # links (internal page links)
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        if (targetId) {
          smoothScrollTo(targetId);
        }
      }
      // Let Next.js Links handle navigation for other links
    });
  });
}

export function countYearsOfExperience(): number {
  const actualYear = new Date().getFullYear();
  const yearsOfExperience = actualYear - 2018;
  return yearsOfExperience;
}