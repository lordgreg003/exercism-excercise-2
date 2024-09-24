// two_fer.ts
function twoFer(name) {
    if (name === void 0) { name = 'you'; }
    return "One for ".concat(name, ", one for me.");
}
console.log(twoFer());
console.log(twoFer("Alice"));
