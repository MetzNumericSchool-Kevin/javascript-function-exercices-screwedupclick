// FONCTION NOM SORCIER 
function salutations(nomSorcier) {
    console.log(`Salutations Aventurier ! Je me nomme ${nomSorcier} pour vous servir..`);
}

// FONCTION POTION
function tarifPotion(idPotion, inventaire, quantite = 1) {
    // Trouver la potion dans l'inventaire avec l'identifiant
    const potion = inventaire.find(p => p.id === idPotion);
    
    // Si la potion existe, on retourne son prix multiplié par la quantité demandée
    if (potion) {
      return potion.prix * quantite;
    } else {
      // Si la potion n'existe pas, on retourne 0 ou une erreur
    return 0;
    }
}

  // Exemple d'inventaire
const inventaire = [
    {
      id: "potion_soin", // Identifiant de la potion
      prix: 10,          // Prix de la potion
      stock: 0,          // Stock (non utilisé ici)
    }
];


console.log(tarifPotion("potion_soin", inventaire, 3)); // Affiche 30
