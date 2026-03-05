/* =========================================
   HUB COMERCIAL — APP LOGIC
   ========================================= */

// ---- DATE DISPLAY ----
(function initDate() {
  const el = document.getElementById('dateDisplay');
  const yearEl = document.getElementById('footerYear');
  const now = new Date();
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formatted = now.toLocaleDateString('es-ES', opts);
  if (el) el.textContent = formatted.charAt(0).toUpperCase() + formatted.slice(1);
  if (yearEl) yearEl.textContent = now.getFullYear();
})();

// ---- LOAD SAVED LINKS from localStorage ----
(function loadSavedLinks() {
  const saved = getSavedLinks();
  document.querySelectorAll('.card').forEach(card => {
    const label = card.dataset.label;
    if (saved[label]) {
      card.href = saved[label];
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      markCardAsLinked(card);
    }
  });
})();

function getSavedLinks() {
  try {
    return JSON.parse(localStorage.getItem('hubComercialLinks') || '{}');
  } catch {
    return {};
  }
}

function saveLinks(links) {
  localStorage.setItem('hubComercialLinks', JSON.stringify(links));
}

function markCardAsLinked(card) {
  card.classList.add('card--linked');
  const arrow = card.querySelector('.card-arrow');
  if (arrow) arrow.textContent = '↗';
}

// ---- CARD CLICK — open modal if href="#" ----
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function (e) {
    if (this.getAttribute('href') === '#') {
      e.preventDefault();
      openModal(this);
    }
  });
});

// ---- MODAL ----
let currentCard = null;

function openModal(card) {
  currentCard = card;
  const icon = card.querySelector('.card-icon').textContent;
  const title = card.querySelector('.card-title').textContent;
  const desc = card.querySelector('.card-desc').textContent;
  const saved = getSavedLinks();

  document.getElementById('modalIcon').textContent = icon;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('modalUrl').value = saved[card.dataset.label] || '';

  document.getElementById('modalOverlay').classList.add('active');
  setTimeout(() => document.getElementById('modalUrl').focus(), 250);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  currentCard = null;
}

function saveLink() {
  const url = document.getElementById('modalUrl').value.trim();
  if (!url) {
    showToast('⚠️ Ingresa una URL válida');
    return;
  }
  if (!/^https?:\/\//i.test(url)) {
    showToast('⚠️ La URL debe comenzar con http:// o https://');
    return;
  }
  if (!currentCard) return;

  const label = currentCard.dataset.label;
  const links = getSavedLinks();
  links[label] = url;
  saveLinks(links);

  currentCard.href = url;
  currentCard.target = '_blank';
  currentCard.rel = 'noopener noreferrer';
  markCardAsLinked(currentCard);

  closeModal();
  showToast('✅ Enlace guardado correctamente');
}

// Allow Enter key in modal input
document.getElementById('modalUrl').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') saveLink();
  if (e.key === 'Escape') closeModal();
});

// ---- SEARCH / FILTER ----
function filterCards() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const sections = document.querySelectorAll('.category-section');
  let anyVisible = false;

  sections.forEach(section => {
    const cards = section.querySelectorAll('.card');
    let sectionVisible = false;

    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const desc = card.querySelector('.card-desc').textContent.toLowerCase();
      const matches = !query || title.includes(query) || desc.includes(query);
      card.classList.toggle('hidden', !matches);
      if (matches) sectionVisible = true;
    });

    section.classList.toggle('all-hidden', !sectionVisible);
    if (sectionVisible) anyVisible = true;
  });

  document.getElementById('noResults').style.display = anyVisible ? 'none' : 'block';
}

// ---- TOAST ----
let toastTimeout = null;

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- KEYBOARD SHORTCUT: Ctrl+K / Cmd+K to focus search ----
document.addEventListener('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('searchInput').focus();
    document.getElementById('searchInput').select();
  }
  if (e.key === 'Escape') {
    closeModal();
    document.getElementById('searchInput').blur();
  }
});
