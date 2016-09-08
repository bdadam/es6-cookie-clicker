// ES2015
// - const, let
// - arrow functions + this binding
// - template literals
// - modules
// - destructuring
// - Promise
// - class

// ES2016
// - Array.includes
// - exponential operator

const game = {
    clickFactor: 1,
    score: 0,
    inventory: {
        autoClicker: 0,
        grandma: 0,
        factory: 0
    },
    prices: {
        autoClicker: 10,
        grandma: 50,
        factory: 1000
    },

    click() {
        this.score += this.clickFactor;
    },

    update() {

    },

    showStats() {
        document.querySelector('#stats').innerHTML = `
            <p>Score: ${this.score}</p>
            <p>Autoclickers: ${this.inventory.autoClicker}</p>
            <p>Grandmas @ work: ${this.inventory.grandma}</p>
            <p>Factories: ${this.inventory.factory}</p>
        `;
    }
};

game.showStats();

const btnCookie = document.querySelector('#btn-cookie');

btnCookie.addEventListener('click', e => {
    game.click();
    game.showStats();
    // console.log(game.score);
});

setInterval(() => {
    game.update();
    game.showStats();
}, 1000);
