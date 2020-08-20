'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const getIdInput = input.id;

  label.textContent = input.name;
  label.setAttribute('for', getIdInput);
  label.setAttribute('class', 'field-label');
  input.parentElement.append(label);

  input.placeholder = input.name[0]
    .toUpperCase() + input.name.slice(1);
}
