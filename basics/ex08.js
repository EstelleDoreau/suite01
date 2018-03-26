/*
    Ecrire une fonction "isAllEven",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre:
        - 1 si tous les nombres du tableau sont pair
        - 0 si au moins un nombre du tableau est impair

    CRITERE DE VALIDATION OBLIGATOIRE
    --> Réutiliser la fonction isEven
        que vous aviez codé dans les exercices précédents ;)
        INTERDICTION d'écrire le contenu de isEven dans la même fonction
        Vous devez donc bien avoir 2 fonctions différentes;

*/

//  écrire votre code sous ce commentaire
const isEven = (_nb) => _nb%2 === 0 ? 1 : 0;

const isAllEven = (_array) => {
  let allEven = 0;
  let counter = 0;
  _array.map( x => {
    
    if (isEven(x) === 1) {
      counter+= 1;
    }
       
  });
  if (counter === _array.length) {
    allEven = 1
  }

  return allEven;
  // pourquoi ça, ça ne foncitonne pas ? => counter === _array.length ? 1 : 0
}

/*
  Test 1
  Résultat attendu : 0
*/

isAllEven([4, 5, 6]);

/*
  Test 2
  Résultat attendu : 1
*/

isAllEven([4, 4, 6, 8, 10, 12]);

/* DO NOT TOUCH */
module.exports = {
  isAllEven: isAllEven
}
