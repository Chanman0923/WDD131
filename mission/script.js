const modeSelect = document.getElementById('mode-select');

modeSelect.addEventListener('change', function () {
    if (modeSelect.value === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
