const { test } = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : test.eleve + " est en formation à la " + test.campus,
    e : "o-",
    T : "U "
}));
