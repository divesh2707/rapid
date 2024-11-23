const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const convertDocxToPDF = (docxPath, pdfPath) => {
  return new Promise((resolve, reject) => {
    // Command with correct path formatting for Windows
    const command = `"C:\\Program Files\\LibreOffice\\program\\soffice.exe" --headless --convert-to pdf --outdir ${path.dirname(pdfPath)} ${docxPath}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Conversion error: ${stderr}`);
        return reject(new Error('File conversion failed'));
      }

      console.log(`Conversion success: ${stdout}`);
      resolve();
    });
  });
};

module.exports = { convertDocxToPDF };
