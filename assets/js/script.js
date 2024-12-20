// Password visibility toggle
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.password-toggle');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
}

// Form validation
function validateForm() {
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;
    const studentIdError = document.getElementById('studentIdError');
    const passwordError = document.getElementById('passwordError');
    
    let isValid = true;

    // Reset error messages
    studentIdError.textContent = '';
    passwordError.textContent = '';

    // Validate Student ID (example: must be 8 digits)
    if (!/^\d{8}$/.test(studentId)) {
        studentIdError.textContent = 'Student ID must be 8 digits';
        isValid = false;
    }

    // Validate Password (example: minimum 8 characters, at least one number and one letter)
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters with numbers and letters';
        isValid = false;
    }

    if (isValid) {
        // Here you would typically send the data to a server
        console.log('Form submitted:', { studentId, password });
        // For demo purposes, show success message
        alert('Login successful!');
    }

    return false; // Prevent form submission for this demo
}
