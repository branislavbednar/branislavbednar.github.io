'use client';

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
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