const button = document.getElementById('changeImage');
const image = document.getElementById('FirstImage');

button.addEventListener('click', function() {
 
    if (image.src.includes('Jujutsu.Kaisen.full.3071604.jpg')) {
        image.src = 'Jujutsu.Kaisen.full.3607847.jpg';
    } else if (image.src.includes('Jujutsu.Kaisen.full.3607847.jpg')) {
        image.src = 'Jujutsu.Kaisen.full.3161089.jpg';
    } else if (image.src.includes('Jujutsu.Kaisen.full.3161089.jpg')) {
        image.src = 'Jujutsu.Kaisen.full.3918105.jpg';
    } else if (image.src.includes('Jujutsu.Kaisen.full.3161089.jpg')) {
        image.src = 'Jujutsu.Kaisen.full.3918105.jpg';
    }
    else {
        image.src = 'Jujutsu.Kaisen.full.3071604.jpg';
    }
});

const button2 = document.getElementById('changeImage');
const title = document.getElementById('Judul');

button2.addEventListener('click', function() {
    if (title.textContent.includes('Jujutsu Kaisen Season 1 Part 1')) {
        title.textContent = 'Jujutsu Kaisen Season 1 Part 2';
    } else if (title.textContent.includes('Jujutsu Kaisen Season 1 Part 2')) {
        title.textContent = 'Jujutsu Kaisen Season 2';
    } else if (title.textContent.includes('Jujutsu Kaisen Season 1')) {
        title.textContent = 'Jujutsu Kaisen Season 1 Part 1';
    } else {
        title.textContent = 'Jujutsu Kaisen Season 1';
    }
});
