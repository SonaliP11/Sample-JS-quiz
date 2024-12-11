document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('name-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('kid-name').value;
        if (name) {
            document.getElementById('greeting').innerText = 'Well done ' + name + '!';
            document.getElementById('name-input-section').classList.add('d-none');
            document.getElementById('game-section').classList.remove('d-none');
            startGame(name);
        }
    });

    