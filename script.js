document.addEventListener('DOMContentLoaded', () => {
    // 1. Modal Logic (For index.html)
    const modal = document.getElementById('registrationModal');
    const openBtns = document.querySelectorAll('.open-modal-btn');
    const closeBtn = document.getElementById('closeModal');
    const form = document.getElementById('regForm');

    if (modal) {
        // Open modal when any CTA button is clicked
        openBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.add('active');
            });
        });

        // Close modal when X is clicked
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Close modal when clicking outside the content box
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        // Handle form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            
            // Collect data if needed in the future
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            
            console.log('User registered:', { name, phone, email });
            
            // Redirect to the Thanks page
            window.location.href = 'thanks.html';
        });
    }

    // 2. Sticky CTA Logic (For index.html)
    const stickyCta = document.querySelector('.sticky-cta');
    const heroSection = document.querySelector('.hero');
    
    if (stickyCta && heroSection) {
        window.addEventListener('scroll', () => {
            // Show sticky CTA when scrolled past the hero section
            const heroBottom = heroSection.getBoundingClientRect().bottom;
            if (heroBottom < 0) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        });
    }

    // 3. Countdown Logic (For thanks.html)
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        let minutes = 9;
        let seconds = 59;
        
        const minEl = document.getElementById('min');
        const secEl = document.getElementById('sec');

        const updateTimer = setInterval(() => {
            seconds--;
            
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
            
            // Stop timer at 00:00
            if (minutes < 0) {
                clearInterval(updateTimer);
                minEl.textContent = '00';
                secEl.textContent = '00';
                return;
            }

            // Update UI with leading zeros
            minEl.textContent = minutes.toString().padStart(2, '0');
            secEl.textContent = seconds.toString().padStart(2, '0');
        }, 1000);
    }
});
