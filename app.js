new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'http://batata.com/',

        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>',

        age: 25,
        x: 0,
        y: 0,

        name2: '',
        age2: '',

        a: 0,
        b: 0,
        age: 20,

        available: false,
        nearby: false,

        error: false,
        success: false,

        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
        ]

    },
    methods:{
        greet: function(time){
            return 'Good ' + time + ' ' + this.name ;
        } ,
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            // console.log(event)
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        logName: function(){
            console.log('you entered your name');
        },
        logAge: function(){
            console.log('you entered your age');
        },
        // addToA: function(){
        //     console.log('addToA');
        //     return this.a + this.age;
        // },
        // addToB: function(){
        //     console.log('addToB');
        //     return this.b + this.age;
        // }
    },
    computed: {
        addToA: function(){
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('addToB');
            return this.b + this.age;
            
        },
        compClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby,
            }
        }
    }
});