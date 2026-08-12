// Data for Reviews
const reviewsData = [
    {
        name: "SpectroGrams",
        role: "Fuzz Labs Team Member",
        text: "Eda is an excellent and reliable individual from whom I've learnt a lot. He has been a huge help, always working his hardest no matter the reach of the server and handling problems quickly without causing any drama. Beyond staff management and administration, he also takes initiative in other areas, showing great flexibility and dedication...",
        img: "./spectrograms.png"
    },
    {
        name: "chumb3x",
        role: "BoxPvP Owner",
        text: "Huge vouch.\n\nEda is extremely dedicated to his job and always works hard. We have been working together for months if not years at this point and he has been extremely reliable and sharp about every call he's made\n\nEda the goat 🐐",
        img: "./chumb3x.png"
    },
    {
        name: "doglovers",
        role: "Colleague",
        text: "I have had the privilege of working with Eda, and his professionalism and passion are simply outstanding. Only 16 years old, he has more than years of experience as a server and network administrator, and it shows.",
        img: "./doglovers.png"
    },
    {
        name: "vxmori",
        role: "Owners United Management",
        text: "Vouch for Eda, he has been a huge help. He works his hardest no matter the size of the server and takes care of problems quickly without any drama.",
        img: "./mori.png"
    },
    {
        name: "Jan1k",
        role: "Colleague",
        text: "Vouch for Eda, he has proven to be a consistent and dedicated manager. I also really like how fast he can learn and adapt in new environments, making the work very smooth. Totally recommended.",
        img: "./jan1k.png"
    },
    {
        name: "Mortea",
        role: "BoxPvP Co-Owner",
        text: "I first met him when he was working for me as staff. He was highly immature, inexperienced, and overall a pretty bad staff member. However he learned from his mistakes and improved himself overtime reaching a state that could make even me proud. Vouch!",
        img: "./a_badc6d01f0b9b752fbd7086426d5cf24.png"
    },
    {
        name: "𝓔𝓼𝓶𝓮",
        role: "Commission",
        text: "I have had a really good experience working with Eda as a developer. He has been super reliable, quick, and easy to communicate with. The work he has done is clean and well made overall.\n\nDefinitely vouch for him 🩷",
        img: "./esme.png"
    },
    {
        name: "Blastingg",
        role: "Dawn / Feather Client Staff",
        text: "Vouch\n\nEda has been a dedicated Staff Member during his time at Dawn/Feather. Never caused any issues, was a great part of the team. Can recommend him for anyone looking for a dedicated Staff Member to add to their team!",
        img: "./blastingg.jpg"
    },
    {
        name: "d1k8",
        role: "Colleague",
        text: "Vouch\n\nExtremely professional, hard-working, and a great person overall.\n\n🐐",
        img: "./d1k8.png"
    },
    {
        name: "0x90",
        role: "Owners Alliance Founder",
        text: "can vouch, veeery experieced, mature and dedicated guy",
        img: "./0x90.png"
    },
    {
        name: "Ollie",
        role: "Owners Alliance Management",
        text: "Vouch!!\n\nEda is one of the best managers I have ever worked with and I fully look up to him as my mentee in the reports department. He is so helpful & always takes the time out of his day to help me whenever I need his help.\n\nThank you Eda 🙂",
        img: "./ollie.png"
    },
    {
        name: "Scrainyr",
        role: "Owners Alliance Staff",
        text: "Eda is extremely professional at all times whilst still being a nice guy you can work with, his work as RM is outstanding and I would definitely recommend him.",
        img: "./scrainyr.jpg"
    }
];

// Init Reviews Carousel
const track = document.getElementById('carousel-track');
let currentSlide = 0;

function initCarousel() {
    if (!track) return;
    track.innerHTML = '';
    
    reviewsData.forEach((rev) => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-quote-mark">"</div>
            <div class="review-text">${rev.text}</div>
            <div class="review-author">
                <img src="${rev.img}" alt="${rev.name}" class="review-pfp">
                <div class="author-info">
                    <div class="author-name">${rev.name}</div>
                    <div class="author-role">${rev.role}</div>
                </div>
            </div>
        `;
        track.appendChild(card);
    });
    
    updateCarousel();
}

function updateCarousel() {
    const cards = document.querySelectorAll('.review-card');
    if (cards.length === 0) return;
    
    const offset = currentSlide * 100;
    cards.forEach(card => {
        card.style.transform = `translateX(-${offset}%)`;
    });
}

function goToSlide(index) {
    if (index < 0 || index >= reviewsData.length) return;
    currentSlide = index;
    updateCarousel();
}

document.getElementById('prev-btn')?.addEventListener('click', () => {
    if(currentSlide > 0) goToSlide(currentSlide - 1);
});
document.getElementById('next-btn')?.addEventListener('click', () => {
    if(currentSlide < reviewsData.length - 1) goToSlide(currentSlide + 1);
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});

// Modals
function openModal(modalId, title, points) {
    const titleEl = document.getElementById('modal-title');
    const listEl = document.getElementById('modal-list');
    if (titleEl) titleEl.innerText = title;
    if (listEl) {
        listEl.innerHTML = '';
        points.forEach(pt => {
            let li = document.createElement('li');
            li.innerText = pt;
            listEl.appendChild(li);
        });
    }
    document.getElementById(modalId)?.classList.add('active');
}

function openPortfolioModal(title, role, desc, img) {
    const titleEl = document.getElementById('port-modal-title');
    const roleEl = document.getElementById('port-modal-role');
    const descEl = document.getElementById('port-modal-desc');
    const imgEl = document.getElementById('port-modal-img');
    
    if (titleEl) titleEl.innerText = title;
    if (roleEl) roleEl.innerText = role;
    if (descEl) descEl.innerText = desc;
    if (imgEl) imgEl.src = img;
    
    document.getElementById('portfolio-modal')?.classList.add('active');
}

function closeModal(e, modalId) {
    if(e.target.id === modalId) {
        document.getElementById(modalId)?.classList.remove('active');
    }
}
function forceCloseModal(modalId) {
    document.getElementById(modalId)?.classList.remove('active');
}

// Scroll Behaviors
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        const offset = 40;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Intersection Observers for Reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
            if(entry.target.id === 'skills') {
                animateSkills();
            }
        }
    });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Skill Animation
let skillsAnimated = false;
function animateSkills() {
    if(skillsAnimated) return;
    skillsAnimated = true;
    
    const bars = document.querySelectorAll('.skill-bar');
    bars.forEach((bar, i) => {
        setTimeout(() => {
            const target = bar.getAttribute('data-width');
            bar.style.width = target + '%';
        }, i * 100);
    });

    const pcts = document.querySelectorAll('.skill-pct');
    pcts.forEach((pct, i) => {
        setTimeout(() => {
            const target = parseInt(pct.getAttribute('data-target'));
            let count = 0;
            const interval = setInterval(() => {
                if(count >= target) {
                    clearInterval(interval);
                    pct.innerText = target + '%';
                } else {
                    count++;
                    pct.innerText = count + '%';
                }
            }, 1200 / target);
        }, i * 100);
    });
}

// Scroll Spy Logic
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar-nav-item');

window.addEventListener('scroll', () => {
    let current = "";
    const scrollPos = window.scrollY + 200; // Increased offset for better detection

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollPos >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    // Special case for reaching the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = "contact";
    }

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("data-target") === current) {
            link.classList.add("active");
        }
    });
});
