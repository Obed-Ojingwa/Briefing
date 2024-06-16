document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:obedojingwa@gmail.com?subject=Message from ${name}&body=${message} (from: ${email})`;

    window.location.href = mailtoLink;
});
