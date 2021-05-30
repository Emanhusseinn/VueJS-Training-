Vue.component('greeting', {
    template: '<p>Hey there, I am a re-usable component</p>'
});
Vue.component('test',{
    template: '<h1>FREE PALESTINE</h1>'
})

/* new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
}); */

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});

new Vue({
    el: '#vue-app-three'
})