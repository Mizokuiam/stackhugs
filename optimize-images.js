const sharp = require('sharp');
const path = require('path');

async function optimizeImage() {
    const inputPath = path.join(__dirname, 'assets', 'images', 'pro_image.png');
    const outputPath = path.join(__dirname, 'assets', 'images', 'pro_image.webp');

    try {
        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
        
        console.log('Image optimized successfully!');
    } catch (error) {
        console.error('Error optimizing image:', error);
    }
}

optimizeImage();
