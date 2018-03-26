/*
    Ecrire une fonction "boostedEvenAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombres PAIRS du tableau

*/

//  écrire votre code sous ce commentaire
const isEven = (_nb) => _nb%2 === 0 ? 1 : 0;

const boostedEvenAddition = (_array) =>  {
	let total = 0;
	_array.map( x => {

		if (isEven(x) === 1) {
			total+= x;
		}

	});
	return total
}
/*
  Test 1
  Résultat attendu : 10
*/

boostedEvenAddition([4, 5, 6]);

/*
  Test 2
  Résultat attendu : 44
*/

boostedEvenAddition([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12]);

/* DO NOT TOUCH */
module.exports = {
  boostedEvenAddition: boostedEvenAddition
}
