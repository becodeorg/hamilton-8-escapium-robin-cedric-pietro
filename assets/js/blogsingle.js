document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    emailInput.addEventListener('input', function() {
        const email = emailInput.value;
        if (!validateEmail(email)) {
            emailError.textContent = 'Invalid email format';
        } else {
            emailError.textContent = '';
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});