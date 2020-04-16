const CANVAS_ID = '#canvas';
const INPUT_ID = '#images';
const DOWNLOAD_ID = '#download';
const FILENAME_ID = '#filename';
const input = document.querySelector(INPUT_ID);
const canvas = document.querySelector(CANVAS_ID);
const download = document.querySelector(DOWNLOAD_ID);
const filename = document.querySelector(FILENAME_ID);
const canvasCtx = canvas.getContext('2d');

input.addEventListener('change', event => {
  const files = event.target.files;
  download.value = '';

  Promise.all([...files].map(file => createImageBitmap(file)))
    .then(bitmaps => {
      let lastHeight = 0;
      const canvasWidth = Math.max(...bitmaps.map(b => b.width));
      const canvasHeight = bitmaps.reduce((acc, b) => acc + b.height, 0);
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      bitmaps.forEach(bitmap => {
        // draw image directly below last, horizontally centered
        canvasCtx.drawImage(bitmap, ((canvasWidth / 2) - (bitmap.width / 2)), lastHeight); 
        lastHeight = lastHeight + bitmap.height;
        bitmap.close(); 
      })

      const finalImage = canvas.toDataURL('image/jpg', 1.0);
      download.href = finalImage;
      download.style.opacity = 1;
    });
  })
  
  filename.addEventListener('input', event => {
    download.download = event.target.value || 'image_stack.jpeg';
});
