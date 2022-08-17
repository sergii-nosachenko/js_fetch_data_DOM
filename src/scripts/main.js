'use strict';

const apiUrl = 'https://mate-academy.github.io/phone-catalogue-static/api';

const request = (endpoint, params = {}) => {
  return fetch(apiUrl + endpoint, params)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(
          new Error(`
            ${response.status}: ${response.statusText}
          `)
        );
      }

      return response.json();
    });
};

const getPhones = () => {
  return request('/phones.json');
};

const getDetails = (phoneId) => {
  return request(`/phones/${phoneId}.json`);
};

const getPhonesDetails = () => {
  return getPhones()
    .then(phones => {
      const getDetailsPromises = [];

      phones.forEach(({ id }) => getDetailsPromises.push(getDetails(id)));

      return Promise.all(getDetailsPromises);
    });
};

const waitingMessage = document.createElement('p');

waitingMessage.textContent = 'Fetching phones...';
document.body.append(waitingMessage);

getPhonesDetails()
  .then(allPhones => {
    waitingMessage.remove();

    const list = document.createElement('ul');

    document.body.append(list);

    allPhones.forEach(phone =>
      list.insertAdjacentHTML('beforeend', `
        <li>${phone.name}</li>
      `)
    );
  })
  .catch(error => {
    alert(error.message);
  });
