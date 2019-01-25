Vue.component("stats-component", {
    template: `
        <div class="stat-item"> 
            <div class="stat-head">{{item.name}}</div>
            <div class="stat-value">{{item.player1}}</div>
            <div class="stat-value">{{item.player2}}</div>
        </div>
    `,
    props: {
        item: Object
    }
});
Vue.component("game-way-component", {
    template: `
        <div class="stat-game-way-item"> 
            <div class="stat-game-way-head">{{item.name}}</div>
            <div class="stat-game-way">{{item.player1}}</div>
            <div class="stat-game-way">{{item.player2}}</div>
        </div>
    `,
    props: {
        item: Object
    }
});
Vue.component("game-leg-component", {
    template: `
        <div class="scoring-row">
            <div class="scoring-throw scoring-throw-first" v-bind:class="{ 'scoring-throw-red': item.throw1 % 1000 >= 100, 'scoring-throw-next': item.next == 1 }">{{item.throw1 === "" ? "" : (item.throw1 >= 10000 ? "X" + Math.floor(item.throw1 / 10000) : item.throw1 % 1000) + "*".repeat(Math.floor(item.throw1 % 10000 / 1000))}}</div>
            <div class="scoring-throw">{{item.left1}}</div>
            <div class="scoring-throw scoring-throw-number">{{item.throw}}</div>
            <div class="scoring-throw">{{item.left2}}</div>
            <div class="scoring-throw scoring-throw-second" v-bind:class="{ 'scoring-throw-red': item.throw2 % 1000 >= 100, 'scoring-throw-next': item.next == 2 }">{{item.throw2 === "" ? "" : (item.throw2 >= 10000 ? "X" + Math.floor(item.throw2 / 10000) : item.throw2 % 1000) + "*".repeat(Math.floor(item.throw2 % 10000 / 1000))}}</div>
        </div>
    `,
    props: {
        item: Object
    }
});
