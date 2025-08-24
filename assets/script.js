    // Navigation functionality
    document.addEventListener('DOMContentLoaded', function() {
      const navButtons = document.querySelectorAll('.nav-btn');
      const sections = document.querySelectorAll('.section');

      navButtons.forEach(button => {
        button.addEventListener('click', () => {
          const targetSection = button.getAttribute('data-section');
          
          // Remove active class from all nav buttons and sections
          navButtons.forEach(btn => btn.classList.remove('active'));
          sections.forEach(section => section.classList.remove('active'));
          
          // Add active class to clicked button and corresponding section
          button.classList.add('active');
          document.getElementById(targetSection).classList.add('active');
        });
      });

      // Project filtering using event delegation so dynamically-created buttons work
      const filterTabsContainer = document.getElementById('project-filter-tabs');
      if (filterTabsContainer) {
        filterTabsContainer.addEventListener('click', (e) => {
          const button = e.target.closest('.filter-btn');
          if (!button) return;
          const filter = button.getAttribute('data-filter');

          // Remove active class from all filter buttons
          const allBtns = filterTabsContainer.querySelectorAll('.filter-btn');
          allBtns.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          // Query current project cards (handles dynamically rendered cards)
          const projectCards = document.querySelectorAll('.project-card');
          projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
              card.style.display = 'block';
              card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
              card.style.display = 'none';
            }
          });
        });
      }

      // Form submission
      const contactForm = document.querySelector('.contact-form form');
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (name && email && message) {
          // Show success message
          const button = this.querySelector('.btn-primary');
          const originalText = button.innerHTML;
          button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
          button.style.background = 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)';
          
          // Reset after 3 seconds
          setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            this.reset();
          }, 3000);
        }
      });

      // Animate skill bars on scroll
      const skillBars = document.querySelectorAll('.skill-fill');
      const observerOptions = {
        threshold: 0.3  ,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillBar = entry.target;
            const width = skillBar.style.width;
            skillBar.style.width = '0%';
            setTimeout(() => {
              skillBar.style.width = width;
              skillBar.style.transition = 'width 1.5s ease-in-out';
            }, 200);
          }
        });
      }, observerOptions);

      skillBars.forEach(bar => observer.observe(bar));

      // Add smooth scrolling for better UX
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Add typing animation to the title
      const title = document.querySelector('.profile .title');
      if (title) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        
        function typeWriter() {
          if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
          }
        }
        
        setTimeout(typeWriter, 1000);
      }

      // Card hover interactions (no continuous float animation)
      const cards = document.querySelectorAll('.card, .project-card, .service-card');
      cards.forEach((card) => {
        card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
        });
      });
    });

    // Add some additional CSS for animations
    const additionalStyles = document.createElement('style');
    additionalStyles.textContent = `
      .contact-info-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 1.5rem;
        margin-bottom: 2rem;
      }
      
      .contact-info-card .contact-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 12px;
        transition: all 0.3s ease;
      }
      
      .contact-info-card .contact-item:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateX(5px);
      }
      
      .contact-info-card .contact-item i {
        color: var(--accent);
        font-size: 1.2rem;
        width: 24px;
      }
      
      .contact-info-card .contact-item h4 {
        margin-bottom: 0.25rem;
        font-size: 0.9rem;
        font-weight: 600;
      }
      
      .contact-info-card .contact-item a,
      .contact-info-card .contact-item span {
        color: var(--text-secondary);
        text-decoration: none;
        font-size: 0.9rem;
      }
      
      .contact-info-card .contact-item a:hover {
        color: var(--accent);
      }
      
      /* Floating animation removed — cards will respond only to hover */
    `;
    document.head.appendChild(additionalStyles);
    
    // Fetch and display GitHub repos in My Work section
    async function getRepos(username) {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return await response.json();
    }


    async function fetchFirstIconFor(word) {
      const endpoint = `https://api.iconify.design/search?query=${encodeURIComponent(word)}&limit=1`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Search request failed with status ${response.status}`);
      }
      const data = await response.json();
      if (data.icons && data.icons.length > 0) {
        return `https://api.iconify.design/${data.icons[0]}.svg`;
      } else {
        // Fallback if no icons found
        return `https://api.iconify.design/mdi:help-circle.svg`;
      }
    }

    async function getLogoForRepo(repoName) {
      const firstWord = repoName.split(/[-_\s]/)[0].toLowerCase();
      try {
      const iconUrl = await fetchFirstIconFor(firstWord);
    // Use CSS mask to apply --accent color as the logo color
    return `<span style="display:inline-block;width:56px;height:56px;background:var(--accent);border-radius:12px;box-shadow:0 0 8px 0 rgba(0,255,136,0.15);mask:url('${iconUrl}') center/contain no-repeat;-webkit-mask:url('${iconUrl}') center/contain no-repeat;"></span>`;
      } catch {
        return '<i class="fab fa-github"></i>';
      }
    }

    async function createRepoCard(repo) {
      const logo = await getLogoForRepo(repo.name);
      return `
        <div class="blog-card">
          <div class="blog-image" style="background: var(--gradient-card); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: var(--accent);">
            ${logo}
          </div>
          <div class="blog-content">
            <div class="blog-meta">${repo.language ? repo.language : 'Repo'}</div>
            <h3><a href="${repo.html_url}" target="_blank" style="color: var(--accent); text-decoration: none;">${repo.name}</a></h3>
            <p class="blog-excerpt">${repo.description ? repo.description : ''}</p>
            <div style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">
              ★ ${repo.stargazers_count} &nbsp; ⑂ ${repo.forks_count}
            </div>
          </div>
        </div>
      `;
    }
    // Dynamically scan assets/images/ for logo files and store in window.repoLogos
    async function scanRepoLogos() {
      // Try to fetch the directory listing (works if server allows it)
      let files = [];
      try {
        const resp = await fetch('assets/images/');
        if (resp.ok) {
          const text = await resp.text();
          // Parse for hrefs to images (works for Apache/nginx directory listing)
          const matches = Array.from(text.matchAll(/href=["']([^"']+\.(?:png|jpg|svg))["']/gi));
          files = matches.map(m => 'assets/images/' + m[1]);
        }
      } catch (e) {
        // fallback: try some common names
        files = [
          'assets/images/linear-reg.jpg',
          'assets/images/ludo_board.jpg',
          'assets/images/mnist-min.png',
          'assets/images/logo-1-color.png',
          'assets/images/logo-2-color.png',
          'assets/images/logo-3-color.png',
          'assets/images/logo-4-color.png',
          'assets/images/logo-5-color.png',
          'assets/images/logo-6.png',
          'assets/images/logo.svg',
        ];
      }
      window.repoLogos = files;
    }

    async function loadRepos() {
      const container = document.getElementById('github-repos');
      try {
        // Wait for repoLogos to be ready
        if (!window.repoLogos) await scanRepoLogos();
        const repos = await getRepos('raj-neelam');
        // Fully sort repositories by stargazers_count (descending), then by name
        repos.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0) || a.name.localeCompare(b.name));
        const cardHtmlArr = await Promise.all(repos.map(createRepoCard));
        container.innerHTML = cardHtmlArr.join('');
      } catch (err) {
        container.innerHTML = `<div style=\"color: var(--accent); padding: 2rem;\">Could not load repositories.</div>`;
      }
    }

    document.addEventListener('DOMContentLoaded', async function() {
      await scanRepoLogos();
      loadRepos();
    });
  