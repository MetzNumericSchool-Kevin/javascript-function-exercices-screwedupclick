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


// FABRICATION POTION
function fabriquerPotion(idPotion, prix = 10, stock = 1) {
    // On retourne un objet avec la même structure qu'une potion de l'inventaire
    return {
    id: idPotion,
    prix: prix,
    stock: stock
    };
}

  // Exemple d'utilisation
console.log(fabriquerPotion("potion_santé", 15, 3));  // Potion avec un prix de 15 et stock de 3
console.log(fabriquerPotion("potion_rage", 20, 5));   // Potion avec un prix de 20 et stock de 5
console.log(fabriquerPotion("potion_mana"));          // Potion avec prix par défaut (10) et stock par défaut (1)


// AJOUT DE POTIONS
function ajouterPotion(inventaire, potion) {
    // On vérifie si la potion existe déjà dans l'inventaire
    const potionExistante = inventaire.find(p => p.id === potion.id);
    
    if (potionExistante) {
      // Si la potion existe, on met à jour le prix et on ajoute au stock existant
    potionExistante.prix = potion.prix;
    potionExistante.stock += potion.stock;
    } else {
      // Sinon, on ajoute la nouvelle potion à l'inventaire
    inventaire.push(potion);
    }

    // On trie l'inventaire du plus cher au moins cher
    inventaire.sort((a, b) => b.prix - a.prix);
}

  // Exemple d'inventaire initial
let inventaire = [
    {
    id: "potion_soin",
    prix: 10,
    stock: 5
    }
];

  // Exemple d'ajout de potion
  ajouterPotion(inventaire, fabriquerPotion("potion_rage", 20, 10)); // Ajoute une nouvelle potion
  ajouterPotion(inventaire, fabriquerPotion("potion_soin", 10, 10)); // Met à jour la potion_soin existante

console.log(inventaire);

// CHERCHONS LES POTIONS
// Fonction pour récupérer toutes les potions en stock (stock > 0)
function potionsEnStock(inventaire) {
    return inventaire.filter(potion => potion.stock > 0);
}

  // Fonction pour récupérer toutes les potions en rupture de stock (stock === 0)
function potionsEnRupture(inventaire) {
    return inventaire.filter(potion => potion.stock === 0);
}

  // Exemple d'inventaire
let inventaire = [
    { id: "potion_soin", prix: 10, stock: 5 },
    { id: "potion_rage", prix: 20, stock: 0 },
    { id: "potion_mana", prix: 15, stock: 3 },
    { id: "potion_vitesse", prix: 30, stock: 0 }
];

  // Affichage de l'inventaire initial
console.log("Inventaire initial:");
console.log(inventaire);

  // Affichage des potions en stock
console.log("Potions en stock (stock > 0):");
console.log(potionsEnStock(inventaire));

  // Affichage des potions en rupture de stock (stock === 0)
console.log("Potions en rupture de stock (stock === 0):");
console.log(potionsEnRupture(inventaire));
