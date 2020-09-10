Vue.component('slice',{

    template:
    `
        <div class="slice-box" :style="sliceBoxStyle">
            <span class="slice" v-bind:style="sliceStyle">
                <b v-bind:style="labelStyle">{{label}}</b>
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
                background: this.color
            };

            if(this.angle > Math.PI){
                style['clip-path'] = ''
            }
            else if (this.angle < Math.PI){
                style['clip-path'] = this.generatePolygon();
            }
            else{
                style['clip-path'] = 'circle(50% at 100% 50%)'
                style['transform'] = 'translate(-50%,0)';
            }

            return style;
        },

        labelStyle: function(){
            var style = {
                transform: ''
            };

            if(this.angle != Math.PI){
                style.transform = 'translate(5%,-50%)'
            }
            else{
                style.transform = 'translate(125%,-50%)'
            }

            return style;
        },
    },

    methods: {

        generatePolygon: function(){

            // Base coordinate
            var y = ( 1 - Math.tan(this.angle/2) ) / 2;

            // Point 1
            var x_p1 = y*100;

            // Point 2
            var x_p2 = 100 - y*100;

            return `polygon(50% 50%, 0% ${x_p1.toString()}%, 0% ${x_p2.toString()}%)`
        },
    },

});