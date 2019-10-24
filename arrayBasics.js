const shoesList = ['nike', 'reebok', 'adidas', 'puma', 'fila'];

const newElement = shoesList.unshift('asics');

console.log('list : ' + shoesList + ' longueur list : ' + shoesList.length);

const deleteElement = shoesList.shift();

console.log('delete element : ' + deleteElement + ' list : ' + shoesList);

console.log(shoesList);

const sliceList = shoesList.slice(0, 3);

console.log(sliceList, sliceList.length);

const newArrayShoes = ['dcMartens', 'clarks', 'dude', 'ellesse', 'fred perry'];

const allShoes = sliceList.concat(newArrayShoes);

console.log('ALLSHOES !!!' + allShoes + ' taille tableau : ' + allShoes.length);
