document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        statusMessage.textContent = '';

        // Client-side validation
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (name.length < 2) {
            statusMessage.textContent = 'Name must be at least 2 characters long.';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            statusMessage.textContent = 'kyvindrakes@aqcsol.com';
            return;
        }

        if (message.length < 10) {
            statusMessage.textContent = 'Message must be at least 10 characters long.';
            return;
        }

        // Mock API submission
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            statusMessage.textContent = 'Message sent successfully!';
            statusMessage.style.color = '#ffffff';
            form.reset();
        } catch (error) {
            statusMessage.textContent = 'Failed to send message. Please try again.';
            statusMessage.style.color = '#ff0000';
        }
    });
});
