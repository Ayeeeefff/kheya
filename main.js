document.getElementById('envelope').addEventListener('click', function () {
    document.getElementById('message').classList.remove('hidden');
});

document.getElementById('close-message').addEventListener('click', function () {
    document.getElementById('message').classList.add('hidden');
});