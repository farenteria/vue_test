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

/* Vuew instance
    inspired by Model View ViewModel pattern. Variable named vm as convention.
    When you create a Vue instance, you pass an options object.
    Vue apps consist of root Vue instance created with 'new Vue'.
    When Vue instance is created, it adds all properties found in data object to Vue's rectivity system.

*/
// data object
var data = { a: 1 };
// adding data object to Vuew instance
var vm = new Vue({
    data: data
});
// these refer to same object
vm.a === data.a;
// this means that setting property to one object will affect the other
vm.a = 2;
data.a; // this will now be 2 as well
/* When data changes, view will be rerendered. However, this is only true if data properties existed
    when instance was created. Any properties added afterwards will not trigger a rerender. To trigger
    this, you'll need to add empty properties to data object beforehand.   

data: {
    newTodoText: "",
    visitCount: 0,
    hideCompletedToDos: false
};
*/

// Instance lifecycle hooks
/* While Vue is being initialized, lifecycle functions hooks are called to allow users to add
    code to specific stages of the Vue lifecycle.
    For example, the created() function can be used to run code after an instance is created
    new Vue({
        data: {
            a: 1
        },
        created: function(){
            // this points to the vm instance
            console.log('a is: ' + this.a)
        }
    });
    It's important to not use arrow functions on an options property callback since arrow
    functions are bound to parent context, 'this' will not point where you want it to 
*/