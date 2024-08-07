document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const openLoginBtn = document.getElementById('open-login');
    const openSignupBtn = document.getElementById('open-signup');
    const openLoginAgainBtn = document.getElementById('open-login-again');
    const closeLoginBtn = document.getElementById('close-login');
    const closeSignupBtn = document.getElementById('close-signup');

    openLoginBtn.onclick = () => {
        loginModal.style.display = 'block';
    }

    openSignupBtn.onclick = () => {
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    }

    openLoginAgainBtn.onclick = () => {
        signupModal.style.display = 'none';
        loginModal.style.display = 'block';
    }

    closeLoginBtn.onclick = () => {
        loginModal.style.display = 'none';
    }

    closeSignupBtn.onclick = () => {
        signupModal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        }
    }
});
