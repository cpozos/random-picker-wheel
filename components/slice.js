Vue.component('slice',{

    template:
    `
        <div class="slice-box" :style="sliceBoxStyle">
            <span class="slice" v-bind:style="sliceStyle">
                <b>{{label}}</b>
            </span>
        </div>
    `,
    props:{
        label: String,
        color: String, 
        angle: Number,
        rotation: Number
    },

    computed: {
        sliceBoxStyle: function(){
            return {
                transform: 'rotate(' + this.rotation + 'rad)'
            }
        },
        sliceStyle: function(){

            var style = {
                background: this.color,
                'clip-path': 'polygon('+ this.generatePoints() + ')'
            }

            return style;
        }
    },

    methods: {
        generatePoints: function() {

            var y = ( 1 - Math.tan(this.angle/2) ) / 2;

            // Point 1
            var x_p1 = y*100;

            // Point 2
            var x_p2 = 100 - y*100;

            return '50% 50%, 0% ' + x_p1.toString() + '%, 0% ' + x_p2.toString() + '%';

            return points;
        }
    },

});