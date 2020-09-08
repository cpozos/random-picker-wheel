Vue.component('expansion-panel',{
    template:
    `
        <div class="slice-box" :style="{ transform: 'rotate('+ turn+'deg)'}">
            <span class="slice" v-bind:style="{ backgroundColor: color}">
                <b>{{label}}</b>
            </span>
        </div>
    `,
    props:{
        label: String,
        color: String,
        turn: String
    },
});