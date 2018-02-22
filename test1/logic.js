var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!"
    }
});

var app_2 = new Vue({
    el: "#app-2",
    data: {
        message: `You loaded this page on ${new Date().toLocaleString()}`
    }
});

// seen attribute used to toggle visibility of element
var app_3 = new Vue({
    el: "#app-3",
    data:{
        seen: false
    }
});

var app_4 = new Vue({
    el: "#app-4",
    data:{
        todos: [
            { text: "Learn JavaScript" },
            { text: "Learn Vue" },
            { text: "Build something awesome" }
        ]
    }
});

var app_5 = new Vue({
    el: "#app-5",
    data: {
        message: "Hello Vue.js!"
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app_6 = new Vue({
    el: "#app-6",
    data: {
        message: "Hello Vue!"
    }
});

// components
// Defining a new component called todo-item
// props are custom attributes we can pass in data to
Vue.component("todo-item", {
    props: ["todo"],
    template: "<li>{{ todo.text }}</li>"
});

var app_7 = new Vue({
    el: "#app-7",
    data: {
        groceryList: [
            { id: 0, text: "Vegetables" },
            { id: 1, text: "Cheese" },
            { id: 2, text: "Food stuffs" }
        ]
    }
});