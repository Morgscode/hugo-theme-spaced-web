window.addEventListener('load', () => {
  const nav = (() => {
    const nav = document.querySelector('.main-navigation');
    const navOpen = document.querySelector('.mobile-nav-open');
    const navClose = document.querySelector('.mobile-nav-close');
    if (nav) {
      navOpen.addEventListener('click', () => nav.classList.add('active'));
      navClose.addEventListener('click', () => nav.classList.remove('active'));
    }
  })();

  const search = (() => {
    const searchResult = (result) =>
      `<div class="search-result"><a href="${result.url}">${result.name}</a></div>`;
    const search = document.querySelector('#search-form');
    const searchResults = document.querySelector('#search-results');
    if (search) {
      search.addEventListener('submit', (e) => {
        e.preventDefault();
        searchResults.innerHTML = '';
        const output = document.createElement('div');
        const data = new FormData(e.target);
        const query = data.get('query');
        const pages = JSON.parse(SITE_DATA.pages);
        const results =
          Array.from(pages)?.filter((page) =>
            page.name.toLowerCase().includes(query.toLowerCase())
          ) || [];
        if (results.length > 0 && query.length > 0) {
          const markup = results.map((result) => searchResult(result));
          output.innerHTML = markup.join('');
          searchResults.appendChild(output);
        } else {
          output.innerHTML = `<p class="empty-notice">No results found for ${query}</p>`;
          searchResults.appendChild(output);
        }
      });
    }
  })();

  const mailer = (() => {
    const form = document.querySelector('#contact-form');
    console.log(form);

    if (form) {
      const contactFormBtn = form.querySelector('#submit-contact-form');
      async function SubmitContactForm(submit) {
        submit.preventDefault();
        contactFormBtn.disabled = true;
        if (form && form.checkValidity()) {
          // fetch post
          try {
            const formDataJSON = convertFormDataToJson(form);
            const response = await fetch(
              `${window.location.origin}/.netlify/functions/mail`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  'X-Requested-With': 'XMLHttpRequest',
                },
                body: formDataJSON,
              }
            );
            if (response.status !== 200) {
              throw new Error();
            }
            form.reset();
            alert(
              'Your message has been delivered!'
            );
          } catch (error) {
            console.error(error);
            alert(
              'There was a problem submitting your contact form - please try again.'
            );
          } finally {
            contactFormBtn.disabled = false;
          }
        }
      }

      function convertFormDataToJson(form) {
        const formData = new FormData(form);
        let postData = new Object();
        formData.forEach((value, key) => (postData[key] = value));
        const json = JSON.stringify(postData);
        return json;
      }

      if (form) {
        form.addEventListener('submit', SubmitContactForm);
      }
    }
  })();
});
