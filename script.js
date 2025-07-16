function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

const tabButtons = document.querySelectorAll('.ptype');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    button.classList.add('active');
    const tabId = button.textContent.trim().toLowerCase() + '-tab';
    document.getElementById(tabId).classList.add('active');
  });
});

const carouselIds = ['residential-carousel', 'commercial-carousel', 'apartment-carousel'];

carouselIds.forEach(id => {
  const container = document.getElementById(id);
  if (container) {
    const cards = Array.from(container.children);
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      container.appendChild(clone);
    });
  }
});
