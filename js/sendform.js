// KIRIHA DEVELOPER HOUSE USE THIS FILE
window.addEventListener("load", function() {
    const form = document.getElementById('contact-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!. We got your message now :D");
      })
    });
  });
  