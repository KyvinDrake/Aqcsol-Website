document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch("https://formspree.io/f/xldbzzav", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          alert("Thanks for your message!");
          form.reset();
        } else {
          alert("Oops! There was a problem submitting your form.");
        }
      })
      .catch(error => {
        console.error("Form submission error:", error);
        alert("Oops! There was a problem submitting your form.");
      });
  });
});
