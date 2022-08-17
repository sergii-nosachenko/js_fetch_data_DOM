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

getPhonesDetails()
  .then(allPhones => {
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
