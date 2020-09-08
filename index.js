const app = new Vue({
    el:'#app',
    data:{
        slices:[],
        newSlice: { label:'', color:'', turn:''}
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
            this.slices.push(this.newSlice);
            this.newSlice = {}
        }
    },
});

