document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const statusMessage = document.getElementById('status-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusMessage.textContent = '';

    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (name.length < 2) {
      statusMessage.textContent = 'Name must be at least 2 characters long.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      statusMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    if (message.length < 10) {
      statusMessage.textContent = 'Message must be at least 10 characters long.';
      return;
    }

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        statusMessage.textContent = 'Message sent successfully!';
        statusMessage.style.color = 'green';
        form.reset();
      } else {
        statusMessage.textContent = 'Failed to send message. Please try again.';
        statusMessage.style.color = 'red';
      }
    } catch (error) {
      statusMessage.textContent = 'There was an error sending the message.';
      statusMessage.style.color = 'red';
    }
  });
});
