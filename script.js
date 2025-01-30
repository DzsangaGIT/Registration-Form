function toggleLeanykoriNev() {
    const sex = document.getElementById('sex').value;
    const maidenNameContainer = document.getElementById('leanykori-container');
    
    if (sex === 'female') {
        maidenNameContainer.style.display = 'block';
    } else {
        maidenNameContainer.style.display = 'none';
    }
}

document.getElementById('regisztracio').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let formValid = true;
    let message = '';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordRepeat = document.getElementById('password-repeat').value;
    const sex = document.getElementById('sex').value;
    const maidenName = document.getElementById('leanykor').value; 
    
    // Ellenőrzések
    if (!name) {
        formValid = false;
        message += '<p style="color: red;">Hiányzó név!</p>';
    }
    
    if (!email) {
        formValid = false;
        message += '<p style="color: red;">Hiányzó email!</p>';
    }
    
    if (!password || !passwordRepeat || password !== passwordRepeat) {
        formValid = false;
        message += '<p style="color: red;">A jelszavak nem egyeznek!</p>';
    }
    
    if (sex === 'female' && !maidenName) {
        formValid = false;
        message += '<p style="color: red;">Hiányzó leánykori név!</p>';
    }
    
    // Ha minden rendben van, sikerüzenet
    if (formValid) {
        message = '<p style="color: green;">Sikeres regisztráció!</p>';
    }

    // Üzenet megjelenítése
    document.getElementById('message').innerHTML = message;
});
