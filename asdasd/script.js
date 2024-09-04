document.getElementById('incrementBtn').addEventListener('click', function() {
    let counter = document.getElementById('counter');
    let currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue + 1;
});