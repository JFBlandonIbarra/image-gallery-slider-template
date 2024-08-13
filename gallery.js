document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById('gallery');
    const numberOfImages = 113;

    // Crear y agregar imágenes de forma dinámica
    for (let i = 1; i <= numberOfImages; i++) {
        const img = document.createElement('img');
        img.src = `Media/${i}.jpg`; // Ajusta la ruta según corresponda
        img.alt = `Imagen ${i}`;
        if (i === 1) img.classList.add('active'); // La primera imagen es la activa por defecto
        galleryContainer.appendChild(img);
    }

    const timeline = document.getElementById('timeline');
    const images = document.querySelectorAll('#gallery img');
    const valuesContainer = document.getElementById('values');

    // Array de valores numéricos a mostrar en el slider (Opcional)
    const valuesArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 112]; // Ajusta según tus necesidades

    const updateSliderBackground = () => {
        const value = parseInt(timeline.value);
        const percentage = (value / (numberOfImages - 1)) * 100;
        timeline.style.background = `linear-gradient(to right, #4E9FBC ${percentage}%, #333 ${percentage}%)`;
    };

    // Inicializa el fondo del slider
    updateSliderBackground();

    // Generar y ajustar los valores numéricos en el slider
    const generateValues = (values) => {
        valuesContainer.innerHTML = '';
        values.forEach(val => {
            const span = document.createElement('span');
            span.textContent = val;
            valuesContainer.appendChild(span);
        });
        adjustFontSize(values.length);
    };

    // Ajusta el tamaño de fuente según la cantidad de valores
    const adjustFontSize = (numValues) => {
        const baseFontSize = 12; // Tamaño base en px
        const minFontSize = 8; // Tamaño mínimo en px
        const maxFontSize = 14; // Tamaño máximo en px
        const fontSize = Math.max(minFontSize, Math.min(maxFontSize, baseFontSize - (numValues - 10) * 0.2));
        valuesContainer.style.fontSize = `${fontSize}px`;
    };

    // Actualiza las imágenes visibles y el fondo del slider
    timeline.addEventListener('input', () => {
        const value = parseInt(timeline.value);
        images.forEach((img, index) => {
            img.classList.toggle('active', index === value);
        });
        updateSliderBackground();
    });

    // Inicializa el slider con los valores definidos
    generateValues(valuesArray);
});
