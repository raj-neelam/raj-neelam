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

      // Project filtering
      const filterButtons = document.querySelectorAll('.filter-btn');
      const projectCards = document.querySelectorAll('.project-card');

      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');
          
          // Remove active class from all filter buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          // Filter project cards
          projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
              card.style.display = 'block';
              card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });

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

      // Add floating animation to cards
      const cards = document.querySelectorAll('.card, .project-card, .service-card');
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
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
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
      }
      
      .card, .project-card, .service-card {
        animation: float 6s ease-in-out infinite;
      }
      
      .card:nth-child(2n) { animation-delay: -3s; }
      .project-card:nth-child(2n) { animation-delay: -2s; }
      .service-card:nth-child(2n) { animation-delay: -1s; }
    `;
    document.head.appendChild(additionalStyles);