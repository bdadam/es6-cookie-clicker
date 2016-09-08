// ES2015
// - const, let
// - arrow functions + this binding
// - default parameters
// - template literals
// - modules
// - destructuring
// - Promise
// - class

// ES2016
// - Array.includes
// - exponential operator

import game from './game';

game.update();

setInterval(() => {
    game.update();
}, 1000);
