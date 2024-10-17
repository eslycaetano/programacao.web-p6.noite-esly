const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'animes.json');

// Carrega os dados do arquivo JSON
function loadAnimes() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// Salva os dados no arquivo JSON
function saveAnimes(animes) {
  fs.writeFileSync(filePath, JSON.stringify(animes, null, 2));
}

module.exports = {
  loadAnimes,
  saveAnimes
};