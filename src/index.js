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
            this.updateSlices(this.getAngle());
            
            // Add new slice
            this.slices.push(this.newSlice);
            
            // Clear slice
            this.newSlice = {}
        },

        deleteSlices: function(){
            this.slices = [];
        },

        deleteSlice: function(index){
            this.slices.splice(index,1);
            this.updateSlices(this.getAngle());
        },

        updateSlices: function(newAngle){
            if(this.slices){
                for (let i = 0; i < this.slices.length; i++) {
                    const slice = this.slices[i];
                    slice.angle = newAngle;
                    slice.rotation = newAngle * (i+1);
                }
            }

            if(this.newSlice.label){
                this.newSlice.color = this.getRandomColor();
                this.newSlice.angle = newAngle;
                this.newSlice.rotation = newAngle * (this.slices.length+1);
            }

            
        },

        getAngle: function(){
            var numberSlices = this.slices.length + 1;
            var angle = 2 * Math.PI / numberSlices;
            return angle;
        },

        getRandomColor: function() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

    },
});

