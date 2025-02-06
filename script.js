document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Simuler une vérification de compte ou création de compte
    if (phone && password && firstName && lastName) {
        localStorage.setItem('user', JSON.stringify({ firstName, lastName }));
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('user-name').textContent = firstName + ' ' + lastName;
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('user');
    document.getElementById('home.html').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
});

// Vérifier si l'utilisateur est déjà connecté au chargement de la page
window.onload = function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('home.html').style.display = 'block';
        document.getElementById('user-name').textContent = user.firstName + ' ' + user.lastName;
    }
};

