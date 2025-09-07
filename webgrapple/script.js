document.getElementById('service-area-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('area-input');
    const newArea = input.value.trim();
    if (newArea) {
      const list = document.getElementById('area-list');
      const listItem = document.createElement('li');
      listItem.textContent = newArea;
      list.appendChild(listItem);
      input.value = '';
    }
  });
  
  document.getElementById('appointment-link-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.querySelector('#appointment-link-form input');
  let newLink = input.value.trim();

  // Check if link starts with http:// or https://
  if (newLink && !/^https?:\/\//i.test(newLink)) {
    newLink = 'https://' + newLink;
  }

  if (newLink) {
    const list = document.querySelector('.appointment-links ul');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="${newLink}" target="_blank">${newLink}</a>`;
    list.appendChild(listItem);
    input.value = '';
  }
});
