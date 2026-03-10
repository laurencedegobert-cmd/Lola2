function filtrerLieux() {
  const query = document.getElementById('search-lieu').value.trim().toLowerCase();
  const items = document.querySelectorAll('#liste-lieux li');
  items.forEach((li) => {
    const text = li.textContent.trim().toLowerCase();
    li.style.display = query === '' || text.includes(query) ? '' : 'none';
  });
}

function ajouterLieu() {
  const input = document.getElementById('input-lieu');
  const value = input.value.trim();
  if (!value) return;

  const ul = document.getElementById('liste-lieux');
  const li = document.createElement('li');
  li.textContent = value;
  ul.appendChild(li);

  input.value = '';
  filtrerLieux();
}

function init() {
  document.getElementById('form-lieu').addEventListener('submit', (event) => {
    event.preventDefault();
    ajouterLieu();
  });

  document.getElementById('search-lieu').addEventListener('input', filtrerLieux);

  document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      alert('Veuillez remplir tous les champs du formulaire de contact.');
      return;
    }

    alert(`Merci ${name} ! Votre message a bien été pris en compte.`);
    document.getElementById('contact-form').reset();
  });
}

document.addEventListener('DOMContentLoaded', init);
