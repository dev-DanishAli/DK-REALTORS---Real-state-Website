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

function showTab(index) {
  const steps = document.querySelectorAll('.step');
  const tabs = document.querySelectorAll('.how-tab');

  steps.forEach(step => step.classList.remove('active'));
  tabs.forEach(tab => tab.classList.remove('active-tab'));

  steps[index].classList.add('active');
  tabs[index].classList.add('active-tab');
}

let currentTab = 0;
const steps = document.querySelectorAll('.step');
const tabs = document.querySelectorAll('.how-tab');

function updateTabs() {
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === currentTab);
    tabs[index].classList.toggle('active-tab', index === currentTab);
  });

  const prevButtons = document.querySelectorAll('.step-buttons button:first-child');
  const nextButtons = document.querySelectorAll('.step-buttons button:last-child');

  prevButtons.forEach(btn => btn.style.display = currentTab === 0 ? 'none' : 'inline-block');
  nextButtons.forEach(btn => btn.style.display = currentTab === tabs.length - 1 ? 'none' : 'inline-block');
}

function nextTab() {
  if (currentTab < tabs.length - 1) {
    currentTab++;
    updateTabs();
  }
}

function prevTab() {
  if (currentTab > 0) {
    currentTab--;
    updateTabs();
  }
}

function showTab(index) {
  currentTab = index;
  updateTabs();
}

updateTabs();
