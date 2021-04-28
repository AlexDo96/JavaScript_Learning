// Optional chaining (?.)
const obj = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'Kitty',
            cat3: {
                name: 'Doraemon'
            }
        }
    }
};

if (obj.cat?.cat2?.cat3) {
    console.log(obj.cat.cat2.cat3.name);
}