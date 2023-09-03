function updateSelectBackgroundColor() {
    const select = document.getElementById("couleur_favorite");
    const colorPreview = document.getElementById("colorPreview");

    const selectedColor = select.options[select.selectedIndex].style.backgroundColor;
    select.style.backgroundColor = selectedColor;
}

document.getElementById("couleur_favorite").addEventListener("change", updateSelectBackgroundColor);

window.addEventListener("load", updateSelectBackgroundColor);


const captureBtn = document.getElementById('captureBtn');
const screenshotCanvas = document.getElementById('screenshot');

captureBtn.addEventListener('click', () => {
    captureScreen();
});

function captureScreen() {
    html2canvas(document.body).then(function (canvas) {
        screenshotCanvas.width = canvas.width;
        screenshotCanvas.height = canvas.height;
        const context = screenshotCanvas.getContext('2d');
        context.drawImage(canvas, 0, 0);

        screenshotCanvas.toBlob(function (blob) {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'Personnage_Tomodachi.png';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        });
    });
}