"use strict";

// service worker registration - remove if you're not going to use it

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

// place your code below
const container = document.querySelector('.repository__wrapper--js');
const noresults = document.querySelector('.repository__none--js');
const submitBtn = document.querySelector('.form-field__submit--js');
const inputUser = document.querySelector('.form-field__input--js');
const sortOpt = document.querySelector('.form-field__select-sort--js');
const directionOpt = document.querySelector('.form-field__select-direction--js');


submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let username = inputUser.value;

  fetch(`https://api.github.com/users/${username}/repos?sort=${sortOpt.value}&direction=${directionOpt.value}`)
    .then(resp => resp.json())
    .then(resp => {
      const repos = resp;
      if (resp.length <= 0) {
        noresults.innerText = "No results found";
      }
      container.innerHTML = `<img class="repository__avatar" src="${resp[0]['owner']['avatar_url']}" alt="Repository's owner avatar.">`;

      for (const repo of repos) {
        const {
          owner: {
            avatar_url: avatar,
          },
          name,
          description,
          url,
          created_at: created,
          updated_at: updated
        } = repo;

        // console.log(avatar, name, description, url, created, updated);
        container.innerHTML += `
      <div class="repository__container">
        <ul class="repository__list">
          <li class="repository__list-item">Name: <a class="repository__link" href="${url}">${name}</a></li>
          <li class="repository__list-item">Description: ${description ? description : 'There is no description for this repository'}</li>
          <li class="repository__list-item">Created at: ${created.slice(0, 10)}</li>
          <li class="repository__list-item">Updated at: ${updated.slice(0, 10)}</li>
        </ul>
      </div>`
      }
    })
    .catch(err => {
      console.log(err);
    })
})





