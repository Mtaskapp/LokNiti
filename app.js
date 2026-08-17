/*
 * Card UI components.
 * Delete one object to remove that card, or copy an object to add a card.
 * Set each href to the destination that card should open.
 */
const cardsData = [
  {
    number: '01',
    icon: 'heart',
    title: 'Make a Donation',
    description: 'Contribute today to help fund public-interest work, research, and essential support for people who need it.',
    meta: 'Payment options',
    href: 'https://example.com/donate',
  },
  {
    number: '02',
    icon: 'people',
    title: 'Get Support',
    description: 'Access practical resources, trusted guidance, and communities that help you move from concern to clarity.',
    meta: '# Financial aid   # Therapy',
    href: 'https://example.com/support',
  },
  {
    number: '03',
    icon: 'spark',
    title: 'Become a Volunteer',
    description: 'Join people giving their time, skills, and perspective to make public life more open and more useful.',
    meta: 'Join our team',
    href: 'https://example.com/volunteer',
  },
  {
    number: '04',
    icon: 'book',
    title: 'Public Policy Hub',
    description: 'Explore research, explainers, and the context you need to participate in the issues that matter to you.',
    meta: '# Open source',
    href: 'https://example.com/policy',
  },
  {
    number: '05',
    icon: 'pulse',
    title: 'Civic Action Tracker',
    description: 'Follow the decisions, promises, and public actions shaping the issues you care about most.',
    meta: 'Live updates',
    metaClass: 'green',
    href: 'https://example.com/tracker',
  },
  {
    number: '06',
    icon: 'chat',
    title: 'Community Forums',
    description: 'Trade ideas with policy thinkers, experts, and fellow citizens who want a better conversation.',
    meta: 'Active discussions',
    href: 'https://example.com/forum',
  },
];

const iconSvgs = {
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.6-8.8 10.2-8.8 10.2S3.2 14.4 3.2 8.8A4.6 4.6 0 0 1 12 6.2a4.6 4.6 0 0 1 8.8 2.6Z" /></svg>',
  people: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.8 19c.3-3.1 2-5 5.2-5s4.9 1.9 5.2 5M16 11a3 3 0 1 0-1.6-5.5M16 14c2.4.1 3.9 1.7 4.2 4" /></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" /></svg>',
  book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v17H7.5A2.5 2.5 0 0 0 5 21.5v-17Z"/><path d="M5 19h15M9 6h7M9 10h7" /></svg>',
  pulse: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h4l2.2-6 4.1 12 2.1-6H21" /></svg>',
  chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.5-.7L4 20l1.3-3.6A7.3 7.3 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/><path d="M8 11.5h.1M12 11.5h.1M16 11.5h.1" /></svg>',
};

function renderCards() {
  const grid = document.getElementById('cardGrid');
  if (!grid) return;

  grid.innerHTML = cardsData.map((card) => `
    <a class="action-card" href="${card.href}" target="_blank" rel="noopener noreferrer" aria-label="${card.title}">
      <div class="card-top">
        <span class="card-icon">${iconSvgs[card.icon] || iconSvgs.spark}</span>
        <span class="card-number">${card.number}</span>
      </div>
      <div class="card-content">
        <h2>${card.title}</h2>
        <p>${card.description}</p>
      </div>
      <div class="card-footer">
        <span class="card-meta ${card.metaClass || ''}">${card.meta}</span>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </div>
    </a>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderCards);
