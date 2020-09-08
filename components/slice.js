Vue.component('slice',{

    template:
    `
        <div class="slice-box" :style="{ transform: 'rotate('+ turn+'deg)'}">
            <span class="slice" v-bind:style="{background-color: color}">
                <b>{{label}}</b>
            </span>
        </div>
    `,

    data() {
        return {
            label:'Label',
            color:'',
            turn:'0'
        }
    },
});