const { objectArray } = require('./object.array');

async function main() {

    let list = objectArray([{code: 'x', active: true}, {code: 'y', active: false}, {code: 'w', active: true}]);

    let result = list.isActive();

    console.table(result);

}

main()

