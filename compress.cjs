const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Install sharp if not present
try {
    require('sharp');
} catch (e) {
    console.log('Installing sharp...');
    execSync('npm install sharp --no-save', { stdio: 'inherit' });
}

const sharp = require('sharp');
const dir = path.join(__dirname, 'public');

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.png')) {
        const input = path.join(dir, file);
        const output = path.join(dir, file.replace('.png', '.webp'));
        sharp(input).webp({ quality: 80 }).toFile(output)
            .then(() => {
                fs.unlinkSync(input);
                console.log('Converted ' + file + ' to webp');
            })
            .catch(console.error);
    }
});
