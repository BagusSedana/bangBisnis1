import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputPath = path.resolve('public/img-portfolio-travel.png');
const outputPath = path.resolve('public/img-portfolio-travel.webp');

sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => {
        console.log('Conversion successful. Deleting original PNG...');
        fs.unlinkSync(inputPath);
    })
    .catch((err) => {
        console.error('Error converting image:', err);
    });
