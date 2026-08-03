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
    img: 'photos/venu.jpeg',
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
    img: 'photos/pinkstairs.jpeg',
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
    img: 'photos/tmobile.jpeg',
    bullets: [
      "Automated scouting routines in Airtable, cutting recruiter time by 30% and accelerating startup outreach velocity.",
      "Created an internal knowledge base to streamline collaboration between T-Mobile's team, VCs, and startup partners.",
    ],
    skills: ['Airtable', 'Automation', 'Knowledge Management', 'VC Partnerships', 'Process Design'],
  },

  /* ── PROJECTS ── */
  wccce2026: {
    type: 'proj',
    company: 'WCCCE 2026',
    role: 'Build Your Own Feature: A GenAI Assignment for Data Structures',
    date: 'April 2026',
    tag: 'Published Paper',
    award: '[ Best Short Paper Award ]',
    img: 'photos/wccce2026.jpeg',
    bullets: [
      'Co-authored (2nd author) a short experience-report paper on "Build Your Own Feature," an open-ended GenAI assignment model for Data Structures & Algorithms courses.',
      'Designed an interface-first project workflow that positions GenAI as an implementation aid constrained by a student-authored specification, rather than a source of finished solutions.',
      'Awarded Best Short Paper at WCCCE 2026, the Western Canada Conference on Computing Education, in Vancouver, BC.',
    ],
    link: 'https://event.fourwaves.com/wccce2026/abstracts/74b49d6c-b805-44ee-8cb8-57942f42afc59',
    skills: ['Research', 'GenAI', 'Computing Education', 'Assignment Design', 'Academic Writing'],
  },
  neurophys: {
    type: 'proj',
    company: 'NEUROPHYS.ai',
    role: 'Mobile Physical Therapy Platform',
    date: 'June 2024 – Present',
    tag: 'HealthTech',
    award: '[ Hollomon Health Innovation Challenge Winner ]',
    img: 'photos/neurophys.jpeg',
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
    award: '[ Poster Presentation · UW Allen School ]',
    img: 'photos/researchposter.jpeg',
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
    img: 'photos/gradebooster.jpg',
    bullets: [
      'Built a study tool on AWS PartyRock that predicts class grades based on student input and study patterns.',
      "Generated personalized study plans tailored to each user's schedule, workload, and learning goals.",
      "Competed at DubHacks, the University of Washington's flagship annual hackathon.",
    ],
    link: 'https://devpost.com/software/grade-booster?ref_content=contribution-prompt&ref_feature=engagement&ref_medium=email&utm_campaign=contribution-prompt&utm_content=contribution_reminder&utm_medium=email&utm_source=transactional#app-team',
    skills: ['AWS PartyRock', 'Generative AI', 'Prompt Engineering', 'Rapid Prototyping'],
  },
  dubhacks23: {
    type: 'proj',
    company: 'DubHacks 2023',
    role: 'Mental Health Support App',
    date: 'October 2023',
    tag: 'Hackathon',
    img: 'photos/mindfulme.jpg',
    bullets: [
      'Built a mental health support app with a GPT-powered AI chatbot that provides compassionate, on-demand conversation.',
      'Developed the mobile app using Flutter and Android Studio, targeting Android devices.',
      'Designed the UX to be calm and accessible for users experiencing stress or anxiety.',
    ],
    link: 'https://devpost.com/software/mindfulme-cdny03',
    skills: ['Flutter', 'Android Studio', 'GPT API', 'Mobile Dev', 'UX Design'],
  },
  winhacks: {
    type: 'proj',
    company: 'Women in Informatics Hackathon',
    role: "Sustainability App — Farmers' Market Finder",
    date: 'January 2024',
    tag: 'Hackathon',
    img: 'photos/seattlefresh.jpeg',
    bullets: [
      "Designed a sustainability-focused mobile app in Figma to connect users with local farmers' markets and seasonal produce.",
      'Focused on accessibility and community impact, aiming to make local food sources more discoverable.',
      'Competed at the Women in Informatics Hackathon at the University of Washington.',
    ],
    link: 'https://www.figma.com/design/a2sjVayEeYAuU2vK0Yqwfb/SeattleFresh-Mock-Up?node-id=0-1&p=f',
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
   TYPED HERO TEXT
══════════════════════════════════════════════════════════════ */
const heroText = "Hi there, I'm Ioli!";
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
   CUSTOM CURSOR
══════════════════════════════════════════════════════════════ */
(function () {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor || window.matchMedia('(hover: none)').matches) return;

  window.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX - 1}px, ${e.clientY - 2}px)`;
  });

  const HOVER_SELECTOR = 'a, button, .nav-tab, .exp-card, .scroll-cue';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(HOVER_SELECTOR)) cursor.classList.add('hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(HOVER_SELECTOR)) cursor.classList.remove('hover');
  });
})();

/* ══════════════════════════════════════════════════════════════
   TERMINAL-STYLE CARD TITLEBARS
══════════════════════════════════════════════════════════════ */
const CARD_FOLDER = { exp: 'experience', proj: 'projects', club: 'clubs' };
document.querySelectorAll('.exp-card[data-card]').forEach(card => {
  const key = card.dataset.card;
  const data = CARDS[key];
  if (!data) return;

  const folder = CARD_FOLDER[data.type] || data.type;
  const bar = document.createElement('div');
  bar.className = 'card-titlebar';
  bar.innerHTML = `
    <span class="card-dot red"></span>
    <span class="card-dot yellow"></span>
    <span class="card-dot green"></span>
    <span class="card-titlebar-label">~/${folder}/${key}</span>
  `;
  card.insertBefore(bar, card.firstChild);
});

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
   NAV SCROLL-SPY
══════════════════════════════════════════════════════════════ */
const navTabs = document.querySelectorAll('.nav-tab');
const navSections = ['hero', 'experience', 'projects', 'clubs']
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

  const folder = CARD_FOLDER[d.type] || d.type;
  document.getElementById('modal-titlebar-label').textContent = `~/${folder}/${key}`;

  // image
  const imgArea = document.getElementById('modal-img-area');
  if (d.img && d.img.trim() !== '') {
    const im = document.createElement('img');
    im.className = 'modal-img';
    im.alt = d.company;
    im.style.opacity = '0';
    im.style.transition = 'opacity 0.3s ease';
    im.onload  = () => { im.style.opacity = '1'; };
    im.onerror = () => { imgArea.innerHTML = `<div class="modal-img-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg><span>[ image failed to load ]</span></div>`; };
    im.src = d.img;
    imgArea.innerHTML = '';
    imgArea.appendChild(im);
  } else if (isClub) {
    imgArea.innerHTML = '';
  } else {
    imgArea.innerHTML = `<div class="modal-img-placeholder">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>
         <span>[ add photo ]</span>
       </div>`;
  }

  // award badge
  document.getElementById('modal-award-area').innerHTML = d.award
    ? `<div class="modal-award">${d.award}</div>` : '';

  document.getElementById('modal-company').textContent = d.company;
  document.getElementById('modal-role').textContent    = d.role;
  document.getElementById('modal-date').textContent    = d.date;
  document.getElementById('modal-tag-area').innerHTML  = `<span class="modal-tag">${d.tag}</span>`;
  document.getElementById('modal-bullets').innerHTML   = d.bullets.map(b => `<li>${b}</li>`).join('');
  document.getElementById('modal-chips').innerHTML     = d.skills.map(s => `<span class="modal-chip">${s}</span>`).join('');

  // ✅ FIXED: was declared twice before — now declared only once
  const linkArea = document.getElementById('modal-link-area');
  linkArea.innerHTML = d.link
    ? `<a class="modal-link-btn" href="${d.link}" target="_blank" rel="noopener">
         [ view project ]
       </a>`
    : '';

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
   KEYBOARD SHORTCUTS
══════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
