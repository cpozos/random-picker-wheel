const app = new Vue({
    el:'#app',
    data:{
        slices:[],
        newSlice: { label:'', color:''}
    },

    methods: {
        girar: function(){
            var x = 1024; // min value
            var y = 9999; // max value

            var deg = Math.floor(Math.random()*(x-y)) + y;
            document.getElementById('circle').style.transform = "rotate("+deg+"deg)";

            var element = document.getElementById('mainbox');
            element.classList.remove('animate');
            setTimeout(() => {
                element.classList.add('animate')
            }, 5000);
        },

        addSlice: function(){

            // Angle
            var angle = this.getAngle();

            if(this.slices){
                for (let i = 0; i < this.slices.length; i++) {
                    const slice = this.slices[i];
                    slice.angle = angle;
                    slice.rotation = angle * (i+1);
                }
            }
            
            this.newSlice.angle = angle;
            this.newSlice.rotation = angle * (this.slices.length + 1);

            // Add new slice
            this.slices.push(this.newSlice);
            
            // Clear slice
            this.newSlice = {}
        },

        deleteSlices: function(){
            this.slices = [];
        },

        getAngle: function(){
            var numberSlices = this.slices.length + 1;
            var angle = 2 * Math.PI / numberSlices;
            return angle;
        }
    },
});

