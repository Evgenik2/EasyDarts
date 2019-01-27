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
Vue.component("history-component", {
    template: `
        <div class="history-item" v-on:click="showHistoryItem()"> 
            <div class="history-timeStamp">{{item.startTime}}</div>
            <div class="scoring-row">
                <div class="stat-game-way-player"> 
                    <div class="stat-game-way-head"></div>
                    <div class="stat-game-way-head">{{item.player1}}</div>
                    <div class="stat-game-way-head">{{item.player2}}</div>
                </div>
                <div class="stat-game-way-item"> 
                    <div class="stat-game-way-head">Sets</div>
                    <div class="stat-game-way">{{item.wonSets1}}</div>
                    <div class="stat-game-way">{{item.wonSets2}}</div>
                </div>
                <div class="stat-game-way-item"> 
                    <div class="stat-game-way-head">100+</div>
                    <div class="stat-game-way">{{item.stats[0].player1}}</div>
                    <div class="stat-game-way">{{item.stats[0].player2}}</div>
                </div>
                <div class="stat-game-way-item"> 
                    <div class="stat-game-way-head">140+</div>
                    <div class="stat-game-way">{{item.stats[1].player1}}</div>
                    <div class="stat-game-way">{{item.stats[1].player2}}</div>
                </div>
                <div class="stat-game-way-item"> 
                    <div class="stat-game-way-head">180</div>
                    <div class="stat-game-way">{{item.stats[2].player1}}</div>
                    <div class="stat-game-way">{{item.stats[2].player2}}</div>
                </div>
                <div class="stat-game-way-item"> 
                    <div class="stat-game-way-head">Av</div>
                    <div class="stat-game-way">{{item.stats[3].player1}}</div>
                    <div class="stat-game-way">{{item.stats[3].player2}}</div>
                </div>
                <div class="stat-game-way-item"> 
                    <div class="stat-game-way-head">HC</div>
                    <div class="stat-game-way">{{item.stats[4].player1}}</div>
                    <div class="stat-game-way">{{item.stats[4].player2}}</div>
                </div>
                <div class="stat-game-way-item"> 
                    <div class="stat-game-way-head">Dbls</div>
                    <div class="stat-game-way">{{item.stats[5].player1}}</div>
                    <div class="stat-game-way">{{item.stats[5].player2}}</div>
                </div>
                <div class="stat-game-way-item"> 
                    <div class="stat-game-way-head">%</div>
                    <div class="stat-game-way">{{item.stats[6].player1}}</div>
                    <div class="stat-game-way"item>{{item.stats[6].player2}}</div>
                </div>
                <div class="stat-game-way-item"> 
                    <div class="stat-game-way-head">Best</div>
                    <div class="stat-game-way">{{item.stats[7].player1}}</div>
                    <div class="stat-game-way">{{item.stats[7].player2}}</div>
                </div>
                <div class="stat-game-way-item"> 
                    <div class="stat-game-way-head">LWAT</div>
                    <div class="stat-game-way">{{item.stats[8].player1}}</div>
                    <div class="stat-game-way">{{item.stats[8].player2}}</div>
                </div>
            </div>
        </div>
    `,
    props: {
        item: Object
    }
});