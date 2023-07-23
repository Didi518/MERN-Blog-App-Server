import fs from 'fs';
import path from 'path';

const fileRemover = (filename) => {
  fs.unlink(path.join(__dirname, '../uploads', filename), function (err) {
    if (err && err.code == 'ENOENT') {
      // fichier inexistant
      console.log(
        `Le fichier ${filename} n'existe pas, impossible de le supprimer`
      );
    } else if (err) {
      console.log(err.message);
      console.log(
        `Une erreur est survenue lors de la tentative de suppression du fichier ${filename}`
      );
    } else {
      console.log(`${filename} supprimé`);
    }
  });
};

export { fileRemover };
