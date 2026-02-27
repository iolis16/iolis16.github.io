/* ══════════════════════════════════════════════════════════════
   CARD DATA
   Set `img` to your photo path, e.g. 'photos/oracle.jpg'
   Set `award` to show a gold badge in the modal
══════════════════════════════════════════════════════════════ */
const CARDS = {

  /* ── EXPERIENCE ── */
  oracle: {
    type: 'exp',
    company: 'Oracle',
    role: 'Software Engineering Intern',
    date: 'June 2025 – September 2025',
    tag: 'Internship',
    img: 'photos/oracle.jpeg',
    bullets: [
      'Implemented SQL and PL/SQL solutions to automate weekly snapshot jobs and persist historical cluster data across infrastructure systems.',
      'Developed interactive dashboards in Oracle Analytics Cloud (Horizon) to visualize regional cache cluster trends for internal engineering teams.',
    ],
    skills: ['SQL', 'PL/SQL', 'Oracle Analytics Cloud', 'Data Visualization', 'Cloud Infrastructure'],
  },
  venu: {
    type: 'exp',
    company: 'Venu AI (YC W21)',
    role: 'Software Engineering Intern',
    date: 'January 2025 – June 2025',
    tag: 'Startup · Y Combinator',
    img: 'venu.jpeg',
    bullets: [
      'Built automation features for email campaigns, LinkedIn outreach, and conference coordination to boost client sales pipelines.',
      'Streamlined customer lead-generation and follow-up workflows based on direct user feedback and rapid iteration cycles.',
    ],
    skills: ['Automation', 'Full-Stack', 'Sales Tools', 'User Research', 'Agile'],
  },
  pinkstairs: {
    type: 'exp',
    company: 'The Pink Stairs',
    role: 'Software Engineering Intern',
    date: 'September 2024 – December 2024',
    tag: 'Nonprofit',
    img: 'pinkstairs.jpeg',
    bullets: [
      "Redesigned and rebuilt the website backend using Node.js, NestJS, and SQL to modernize the organization's tech stack.",
      'Improved site performance and accessibility to better support the leadership development mission.',
    ],
    skills: ['Node.js', 'NestJS', 'SQL', 'Accessibility', 'Backend Engineering'],
  },
  tmobile: {
    type: 'exp',
    company: 'T-Mobile',
    role: 'Accelerator Intern',
    date: 'June – September 2024',
    tag: 'Internship',
    img: 'tmobile.jpeg',
    bullets: [
      "Automated scouting routines in Airtable, cutting recruiter time by 30% and accelerating startup outreach velocity.",
      "Created an internal knowledge base to streamline collaboration between T-Mobile's team, VCs, and startup partners.",
    ],
    skills: ['Airtable', 'Automation', 'Knowledge Management', 'VC Partnerships', 'Process Design'],
  },

  /* ── PROJECTS ── */
  neurophys: {
    type: 'proj',
    company: 'NEUROPHYS.ai',
    role: 'Mobile Physical Therapy Platform',
    date: 'June 2024 – Present',
    tag: 'HealthTech',
    award: '🏆 Hollomon Health Innovation Challenge Winner',
    img: '',
    bullets: [
      'Developed a full-stack platform for a mobile physical therapy app, supporting patients on both Android and iOS.',
      'Built secure backend workflows for patient progress tracking with HIPAA-conscious data handling.',
      'Awarded at the Hollomon Health Innovation Challenge for impact in digital health technology.',
    ],
    skills: ['Full-Stack', 'Android', 'iOS', 'Firebase', 'Healthcare APIs', 'Backend'],
  },
  allenresearch: {
    type: 'proj',
    company: 'Allen School Research Symposium',
    role: 'Integrating AI Into Assignment Design',
    date: 'January 2024 – Present',
    tag: 'Academic Research',
    award: '🎓 Poster Presentation · UW Allen School',
    img: '',
    bullets: [
      'Ongoing research project examining how AI tools influence the design of assignments in college-level computer science courses.',
      'Investigated methods for evaluating learning outcomes in the context of increasing AI integration across coursework.',
      'Presented findings as a poster at the Allen School Research Symposium at the University of Washington.',
    ],
    skills: ['Research', 'AI/Ed-Tech', 'Data Analysis', 'Academic Writing', 'UW CSE'],
  },
  dubhacks24: {
    type: 'proj',
    company: 'DubHacks 2024',
    role: 'AWS Study Tool — Grade Predictor & Planner',
    date: 'October 2024',
    tag: 'Hackathon',
    img: '',
    bullets: [
      'Built a study tool on AWS PartyRock that predicts class grades based on student input and study patterns.',
      "Generated personalized study plans tailored to each user's schedule, workload, and learning goals.",
      "Competed at DubHacks, the University of Washington's flagship annual hackathon.",
    ],
    skills: ['AWS PartyRock', 'Generative AI', 'Prompt Engineering', 'Rapid Prototyping'],
  },
  dubhacks23: {
    type: 'proj',
    company: 'DubHacks 2023',
    role: 'Mental Health Support App',
    date: 'October 2023',
    tag: 'Hackathon',
    img: '',
    bullets: [
      'Built a mental health support app with a GPT-powered AI chatbot that provides compassionate, on-demand conversation.',
      'Developed the mobile app using Flutter and Android Studio, targeting Android devices.',
      'Designed the UX to be calm and accessible for users experiencing stress or anxiety.',
    ],
    skills: ['Flutter', 'Android Studio', 'GPT API', 'Mobile Dev', 'UX Design'],
  },
  winhacks: {
    type: 'proj',
    company: 'Women in Informatics Hackathon',
    role: "Sustainability App — Farmers' Market Finder",
    date: 'January 2024',
    tag: 'Hackathon',
    img: '',
    bullets: [
      "Designed a sustainability-focused mobile app in Figma to connect users with local farmers' markets and seasonal produce.",
      'Focused on accessibility and community impact, aiming to make local food sources more discoverable.',
      'Competed at the Women in Informatics Hackathon at the University of Washington.',
    ],
    skills: ['Figma', 'UI/UX Design', 'Mobile Prototyping', 'Sustainability', 'User Research'],
  },

  /* ── CLUBS ── */
  kathakaars: {
    type: 'club',
    company: 'Kathakaars',
    role: 'President',
    date: 'University of Washington',
    tag: 'Club Leadership',
    img: '',
    bullets: [
      'Lead the Indian classical dance group at UW, organizing performances and workshops celebrating South Asian culture.',
      'Manage rehearsal schedules, choreography, and outreach to grow the club and engage the wider UW community.',
      'Foster an inclusive and welcoming environment for dancers of all experience levels.',
    ],
    skills: ['Leadership', 'Indian Classical Dance', 'Arts', 'Event Planning', 'Community Building'],
  },
  wic: {
    type: 'club',
    company: 'Women in Computing',
    role: 'Social Media Director',
    date: 'University of Washington',
    tag: 'Club Leadership',
    img: '',
    bullets: [
      'Manage WiC social media channels to grow the community online and spotlight members, events, and opportunities.',
      'Create and schedule content that inspires women in tech and builds visibility for WiC across the UW campus.',
      'Coordinate with the broader WiC board to align social media with club programming and goals.',
    ],
    skills: ['Social Media', 'Community', 'Content Creation', 'Design', 'Communications'],
  },
  swe: {
    type: 'club',
    company: 'Society of Women Engineers',
    role: 'Corporate Relations Director — SWEHacks',
    date: 'University of Washington',
    tag: 'Club Leadership',
    img: '',
    bullets: [
      "Plan and organize UW's annual SWEHacks hackathon, coordinating logistics, judging, and day-of operations.",
      'Manage sponsor relationships and corporate outreach to secure funding and partnerships for the event.',
      "Work across the SWEHacks team to create a welcoming and exciting hackathon experience for all participants.",
    ],
    skills: ['Event Planning', 'Sponsorships', 'Hackathon', 'Corporate Relations', 'Project Management'],
  },
};

/* ══════════════════════════════════════════════════════════════
   GALLERY DATA
   Add photos to the `photos` array for each hobby.
   Entry format: { src: 'photos/filename.jpg', caption: 'your caption' }
   Leave photos: [] to show a friendly placeholder.
   To add a new hobby: add a tile in index.html with data-gallery="mykey"
   and add a matching entry here.
══════════════════════════════════════════════════════════════ */
const GALLERIES = {
  matcha: {
    title: '🍵 matcha everything',
    emoji: '🍵',
    photos: [
      // { src: 'photos/matcha1.jpg', caption: 'favourite spot in Capitol Hill' },
      // { src: 'photos/matcha2.jpg', caption: 'homemade ceremonial grade 🌿' },
    ],
  },
  coffee: {
    title: '☕ coffee shop hopping',
    emoji: '☕',
    photos: [
      // { src: 'photos/coffee1.jpg', caption: 'rainy day vibes' },
      // { src: 'photos/coffee2.jpg', caption: 'studying at Victrola' },
    ],
  },
  hiking: {
    title: '🥾 hiking the PNW',
    emoji: '🥾',
    photos: [
      // { src: 'photos/hike1.jpg', caption: 'Rattlesnake Ledge' },
      // { src: 'photos/hike2.jpg', caption: 'Mt Rainier views' },
    ],
  },
};

/* ══════════════════════════════════════════════════════════════
   TYPED HERO TEXT
══════════════════════════════════════════════════════════════ */
const heroText = "Hi there, I'm Ioli! 👋";
const typedEl  = document.getElementById('typed-text');
let charIdx = 0;

function typeCharacter() {
  if (charIdx < heroText.length) {
    typedEl.textContent += heroText.charAt(charIdx++);
    setTimeout(typeCharacter, 100);
  }
}
document.addEventListener('DOMContentLoaded', typeCharacter);

/* ══════════════════════════════════════════════════════════════
   FLOATING BUBBLES
══════════════════════════════════════════════════════════════ */
const bubbleContainer = document.querySelector('.bubble-background');
for (let i = 0; i < 24; i++) {
  const b = document.createElement('div');
  b.classList.add('bubble');
  const size = Math.random() * 40 + 20;
  b.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;animation-delay:${Math.random()*6}s;animation-duration:${Math.random()*5+7}s`;
  bubbleContainer.appendChild(b);
}

/* ══════════════════════════════════════════════════════════════
   SCROLL FADE-IN — CARDS
══════════════════════════════════════════════════════════════ */
const allCards = document.querySelectorAll('.exp-card');
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = [...entry.target.closest('.card-grid').querySelectorAll('.exp-card')];
      const i = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${(i % 3) * 0.12}s`;
      entry.target.classList.add('visible');
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
allCards.forEach(c => cardObserver.observe(c));

/* ══════════════════════════════════════════════════════════════
   SCROLL FADE-IN — HOBBY TILES & RATING SHELVES
══════════════════════════════════════════════════════════════ */
const hobbyEls = document.querySelectorAll('.hobby-tile, .ratings-shelf');
const hobbyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const parent = entry.target.closest('.hobby-tiles, .ratings-grid');
      const siblings = parent
        ? [...parent.querySelectorAll('.hobby-tile, .ratings-shelf')]
        : [entry.target];
      const i = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${i * 0.10}s`;
      entry.target.classList.add('visible');
      hobbyObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.10 });
hobbyEls.forEach(el => hobbyObserver.observe(el));

/* ══════════════════════════════════════════════════════════════
   NAV SCROLL-SPY
══════════════════════════════════════════════════════════════ */
const navTabs = document.querySelectorAll('.nav-tab');
const navSections = ['hero', 'experience', 'projects', 'clubs', 'hobbies']
  .map(id => document.getElementById(id))
  .filter(Boolean);

function updateNav() {
  let active = navSections[0];
  for (const s of navSections) {
    if (s.getBoundingClientRect().top <= 90) active = s;
  }
  navTabs.forEach(t => {
    t.classList.toggle('active', t.dataset.section === active.id);
  });
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ══════════════════════════════════════════════════════════════
   CARD MODAL
══════════════════════════════════════════════════════════════ */
const modalOverlay = document.getElementById('modal-overlay');
const modalEl      = document.getElementById('modal');
const modalClose   = document.getElementById('modal-close');

function openModal(key) {
  const d = CARDS[key];
  if (!d) return;

  const isProj = d.type === 'proj';
  const isClub = d.type === 'club';
  modalEl.className = isProj ? 'modal proj-modal' : isClub ? 'modal club-modal' : 'modal';

  // image
  const imgArea = document.getElementById('modal-img-area');
  imgArea.innerHTML = d.img
    ? `<img class="modal-img" src="${d.img}" alt="${d.company}">`
    : `<div class="modal-img-placeholder">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>
         <span>📸 add your photo here</span>
       </div>`;

  // award badge
  document.getElementById('modal-award-area').innerHTML = d.award
    ? `<div class="modal-award">${d.award}</div>` : '';

  document.getElementById('modal-company').textContent = d.company;
  document.getElementById('modal-role').textContent    = d.role;
  document.getElementById('modal-date').textContent    = d.date;
  document.getElementById('modal-tag-area').innerHTML  = `<span class="modal-tag">${d.tag}</span>`;
  document.getElementById('modal-bullets').innerHTML   = d.bullets.map(b => `<li>${b}</li>`).join('');
  document.getElementById('modal-chips').innerHTML     = d.skills.map(s => `<span class="modal-chip">${s}</span>`).join('');

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalEl.scrollTop = 0;
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

allCards.forEach(card => card.addEventListener('click', () => openModal(card.dataset.card)));
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

/* ══════════════════════════════════════════════════════════════
   PHOTO GALLERY LIGHTBOX
══════════════════════════════════════════════════════════════ */
let galKey = null;
let galIdx = 0;

const galOverlay = document.getElementById('gallery-overlay');
const galClose   = document.getElementById('gallery-close');
const galPrev    = document.getElementById('gallery-prev');
const galNext    = document.getElementById('gallery-next');
const galImgWrap = document.getElementById('gallery-img-wrap');
const galTitle   = document.getElementById('gallery-title');
const galCounter = document.getElementById('gallery-counter');
const galThumbs  = document.getElementById('gallery-thumbs');

function renderGalleryPhoto(idx) {
  const g = GALLERIES[galKey];
  const p = g.photos[idx];
  galIdx = idx;
  if (!p) return;

  galImgWrap.innerHTML = `<img src="${p.src}" alt="${p.caption || ''}" onload="this.classList.add('loaded')">`;
  galTitle.textContent   = p.caption || g.title;
  galCounter.textContent = `${idx + 1} / ${g.photos.length}`;

  galThumbs.querySelectorAll('.gallery-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });

  galPrev.disabled = idx === 0;
  galNext.disabled = idx === g.photos.length - 1;
}

function openGallery(key) {
  galKey = key;
  const g = GALLERIES[key];
  if (!g) return;

  galThumbs.innerHTML = '';

  if (g.photos.length === 0) {
    galImgWrap.innerHTML = `
      <div class="gallery-placeholder">
        <span class="ph-emoji">${g.emoji}</span>
        <span>photos coming soon!<br>add paths to GALLERIES in script.js 📸</span>
      </div>`;
    galTitle.textContent   = g.title;
    galCounter.textContent = '';
    galPrev.disabled = true;
    galNext.disabled = true;
  } else {
    g.photos.forEach((p, i) => {
      const t = document.createElement('div');
      t.className = 'gallery-thumb';
      t.innerHTML = p.src ? `<img src="${p.src}" alt="${p.caption || ''}">` : g.emoji;
      t.addEventListener('click', () => renderGalleryPhoto(i));
      galThumbs.appendChild(t);
    });
    renderGalleryPhoto(0);
  }

  galOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  galOverlay.classList.remove('open');
  document.body.style.overflow = '';
  galKey = null;
}

galPrev.addEventListener('click', () => { if (galIdx > 0) renderGalleryPhoto(galIdx - 1); });
galNext.addEventListener('click', () => {
  const g = GALLERIES[galKey];
  if (g && galIdx < g.photos.length - 1) renderGalleryPhoto(galIdx + 1);
});
galClose.addEventListener('click', closeGallery);
galOverlay.addEventListener('click', e => { if (e.target === galOverlay) closeGallery(); });

// hook up hobby tiles
document.querySelectorAll('.hobby-tile[data-gallery]').forEach(tile => {
  tile.addEventListener('click', () => openGallery(tile.dataset.gallery));
});

/* ══════════════════════════════════════════════════════════════
   KEYBOARD SHORTCUTS
══════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  // gallery keyboard nav
  if (galOverlay.classList.contains('open')) {
    if (e.key === 'ArrowLeft') { if (galIdx > 0) renderGalleryPhoto(galIdx - 1); }
    if (e.key === 'ArrowRight') {
      const g = GALLERIES[galKey];
      if (g && galIdx < g.photos.length - 1) renderGalleryPhoto(galIdx + 1);
    }
    if (e.key === 'Escape') closeGallery();
    return;
  }
  // modal close
  if (e.key === 'Escape') closeModal();
});
  
