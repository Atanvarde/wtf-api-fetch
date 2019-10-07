!function(n){var e={};function c(t){if(e[t])return e[t].exports;var l=e[t]={i:t,l:!1,exports:{}};return n[t].call(l.exports,l,l.exports,c),l.l=!0,l.exports}c.m=n,c.c=e,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)c.d(t,l,function(e){return n[e]}.bind(null,l));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\n// if ('serviceWorker' in navigator) {\n//   window.addEventListener('load', function() {\n//     navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n//       // Registration was successful\n//       console.log('ServiceWorker registration successful with scope: ', registration.scope);\n//     }, function(err) {\n//       // registration failed :(\n//       console.log('ServiceWorker registration failed: ', err);\n//     });\n//   });\n// }\n\n// place your code below\nconst container = document.querySelector('.repository__wrapper--js');\nconst noresults = document.querySelector('.repository__none--js');\nconst submitBtn = document.querySelector('.form-field__submit--js');\nconst inputUser = document.querySelector('.form-field__input--js');\nconst sortOpt = document.querySelector('.form-field__select-sort--js');\nconst directionOpt = document.querySelector('.form-field__select-direction--js');\nconst repoHeader = document.querySelector('.repository__header--js');\n\n\nsubmitBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  let username = inputUser.value;\n\n  fetch(`https://api.github.com/users/${username}/repos?sort=${sortOpt.value}&direction=${directionOpt.value}`)\n    .then(resp => resp.json())\n    .then(resp => {\n      const repos = resp;\n      if (resp.length <= 0) {\n        noresults.innerText = \"No results found\";\n      }\n      container.innerHTML = `<img class=\"repository__avatar\" src=\"${resp[0]['owner']['avatar_url']}\" alt=\"Repository's owner avatar.\">`;\n      repoHeader.innerHTML = `${username} Github repositories`;\n\n      for (const repo of repos) {\n        const {\n          owner: {\n            avatar_url: avatar,\n          },\n          name,\n          description,\n          url,\n          created_at: created,\n          updated_at: updated\n        } = repo;\n\n        // console.log(avatar, name, description, url, created, updated);\n        container.innerHTML += `\n      <div class=\"repository__container\">\n        <ul class=\"repository__list\">\n          <li class=\"repository__list-item\">Name: <a class=\"repository__link\" href=\"${url}\">${name}</a></li>\n          <li class=\"repository__list-item\">Description: ${description ? description : 'There is no description for this repository'}</li>\n          <li class=\"repository__list-item\">Created at: ${created.slice(0, 10)}</li>\n          <li class=\"repository__list-item\">Updated at: ${updated.slice(0, 10)}</li>\n        </ul>\n      </div>`\n      }\n    })\n    .catch(err => {\n      console.log(err);\n    })\n})\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTLGNBQWMsY0FBYyxhQUFhLG1CQUFtQjtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsK0JBQStCO0FBQ25HLGdDQUFnQyxTQUFTOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixJQUFJLElBQUksS0FBSztBQUNuRywyREFBMkQsMEVBQTBFO0FBQ3JJLDBEQUEwRCxxQkFBcUI7QUFDL0UsMERBQTBELHFCQUFxQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbi8vIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4vLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4vLyAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuLy8gICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4vLyAgICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuLy8gICAgIH0sIGZ1bmN0aW9uKGVycikge1xuLy8gICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuLy8gICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbi8vICAgICB9KTtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcG9zaXRvcnlfX3dyYXBwZXItLWpzJyk7XG5jb25zdCBub3Jlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwb3NpdG9yeV9fbm9uZS0tanMnKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWZpZWxkX19zdWJtaXQtLWpzJyk7XG5jb25zdCBpbnB1dFVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1maWVsZF9faW5wdXQtLWpzJyk7XG5jb25zdCBzb3J0T3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZmllbGRfX3NlbGVjdC1zb3J0LS1qcycpO1xuY29uc3QgZGlyZWN0aW9uT3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZmllbGRfX3NlbGVjdC1kaXJlY3Rpb24tLWpzJyk7XG5jb25zdCByZXBvSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcG9zaXRvcnlfX2hlYWRlci0tanMnKTtcblxuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB1c2VybmFtZSA9IGlucHV0VXNlci52YWx1ZTtcblxuICBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJuYW1lfS9yZXBvcz9zb3J0PSR7c29ydE9wdC52YWx1ZX0mZGlyZWN0aW9uPSR7ZGlyZWN0aW9uT3B0LnZhbHVlfWApXG4gICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbihyZXNwID0+IHtcbiAgICAgIGNvbnN0IHJlcG9zID0gcmVzcDtcbiAgICAgIGlmIChyZXNwLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIG5vcmVzdWx0cy5pbm5lclRleHQgPSBcIk5vIHJlc3VsdHMgZm91bmRcIjtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cInJlcG9zaXRvcnlfX2F2YXRhclwiIHNyYz1cIiR7cmVzcFswXVsnb3duZXInXVsnYXZhdGFyX3VybCddfVwiIGFsdD1cIlJlcG9zaXRvcnkncyBvd25lciBhdmF0YXIuXCI+YDtcbiAgICAgIHJlcG9IZWFkZXIuaW5uZXJIVE1MID0gYCR7dXNlcm5hbWV9IEdpdGh1YiByZXBvc2l0b3JpZXNgO1xuXG4gICAgICBmb3IgKGNvbnN0IHJlcG8gb2YgcmVwb3MpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIG93bmVyOiB7XG4gICAgICAgICAgICBhdmF0YXJfdXJsOiBhdmF0YXIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIHVybCxcbiAgICAgICAgICBjcmVhdGVkX2F0OiBjcmVhdGVkLFxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IHVwZGF0ZWRcbiAgICAgICAgfSA9IHJlcG87XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYXZhdGFyLCBuYW1lLCBkZXNjcmlwdGlvbiwgdXJsLCBjcmVhdGVkLCB1cGRhdGVkKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwicmVwb3NpdG9yeV9fY29udGFpbmVyXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cInJlcG9zaXRvcnlfX2xpc3RcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJyZXBvc2l0b3J5X19saXN0LWl0ZW1cIj5OYW1lOiA8YSBjbGFzcz1cInJlcG9zaXRvcnlfX2xpbmtcIiBocmVmPVwiJHt1cmx9XCI+JHtuYW1lfTwvYT48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInJlcG9zaXRvcnlfX2xpc3QtaXRlbVwiPkRlc2NyaXB0aW9uOiAke2Rlc2NyaXB0aW9uID8gZGVzY3JpcHRpb24gOiAnVGhlcmUgaXMgbm8gZGVzY3JpcHRpb24gZm9yIHRoaXMgcmVwb3NpdG9yeSd9PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJyZXBvc2l0b3J5X19saXN0LWl0ZW1cIj5DcmVhdGVkIGF0OiAke2NyZWF0ZWQuc2xpY2UoMCwgMTApfTwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwicmVwb3NpdG9yeV9fbGlzdC1pdGVtXCI+VXBkYXRlZCBhdDogJHt1cGRhdGVkLnNsaWNlKDAsIDEwKX08L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pXG59KVxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);