const hentaijs = require('../index');
const nhentai = new hentaijs();

//nhentai.get('353103').then((data) => console.log(data));
//nhentai.query('Kantai Collection', 'popular', 1).then((data) => console.log(data));
nhentai.search("Kantai Collection").then(data => console.log(data));