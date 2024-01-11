const express = require('express');
const app = express();
const path = require('path');

// Middleware pour les fichiers statiques
app.use('/flags', express.static(path.join(__dirname, 'flags')));
app.use('/logos', express.static(path.join(__dirname, 'logos')));
app.use('/physicals', express.static(path.join(__dirname, 'physicals')));

// Le reste de votre code de serveur...

const PORT = process.env.PORT || 4210;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
