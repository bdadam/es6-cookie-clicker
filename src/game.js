const game = {
    clickFactor: 1,
    score: 0,
    products: [
        'autoClicker',
        'grandma',
        'factory'
    ],
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

    init() {
        document.addEventListener('click', e => {
            const element = e.srcElement;
            const whatToBuy = element.dataset.buy;

            if (whatToBuy) {
                return game.buy(whatToBuy);
            }

            if (element.id === 'btn-cookie') {
                game.click();
            }

            game.update();
        });

    },

    buy(product) {
        const price = this.prices[product];

        if (this.canBuy(product)) {
            this.score -= price;
            this.prices[product] = (this.prices[product] * 1.15) | 0;
            this.inventory[product] += 1;
        }
    },

    canBuy(product) {
        return product && this.prices[product] && this.score >= this.prices[product];
    },

    click() {
        this.score += this.clickFactor;
    },

    update() {
        this.showStats();
        this.renderShop();
    },

    showStats() {
        document.querySelector('#stats').innerHTML = `
            <p>Score: ${this.score}</p>
            <p>Autoclickers: ${this.inventory.autoClicker}</p>
            <p>Grandmas @ work: ${this.inventory.grandma}</p>
            <p>Factories: ${this.inventory.factory}</p>
        `;
    },

    renderShop() {
        const autoClickerDisabled = this.score < this.prices.autoClicker ? 'disabled' : '';
        let html = '';

        document.querySelector('#shop').innerHTML = game.products.map(product => {
            const disabled = game.canBuy(product) ? '' : 'disabled';
            return `<button id="buy-autoclicker" data-buy="autoClicker" ${disabled}>Buy AutoClicker <span class="price">${this.prices[product]}</span></button>`;
        }).join('\n');
    }
};

export default game;
