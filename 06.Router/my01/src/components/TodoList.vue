<template>
<div id="todo-list-example">
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
      v-model="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
    >
    <button>Add</button>
  </form>
  <ul>
    <!-- <todo-item v-for="item in todos" 
        :key="item.id"
        :title="item.title"
        v-on:remove="todos.splice(index, 1)"
    >
    </todo-item> -->
    <todo-item v-for="item in todos" 
        :key="item.id"
        :title="item.title"
        :id="$index"
        @delete="deleteHandle"
    >
    </todo-item>
  </ul>

  <!-- <div v-for="(item,index) in todos" :key="item"> 
        {{item.title}} 
  </div>
  <div v-for="item in todos" :key="item"> 
        {{item.title}} 
  </div> -->
</div>
    </template>
<script>
import todoItem from './TodoItem.vue';
export default {
        data:function(){
            return {
            newTodoText: '',
            todos: [
              {
                id: 1,
                title: 'Do the dishes',
              },
              {
                id: 2,
                title: 'Take out the trash',
              },
              {
                id: 3,
                title: 'Mow the lawn'
              }
            ],
            nextTodoId: 4
            }
        },
        components:{
            'todo-item':todoItem
        },
      //   components:{todoItem:'todo-item'},
      //   template: '\
      //   <li>\
      //     {{ title }}\
      //     <button v-on:click="$emit(\'remove\')">Remove</button>\
      //   </li>\
      // ',
      // props: ['title'],
      methods: {
        addNewTodo: function () {
          this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
          })
          this.newTodoText = ''
        },
        deleteHandle:function(index){
            this.todos.splice(index, 1);
        },
        // deleteHandle:function(index){
        //     this.todos.splice(id, 1);
        // }
      }
    }
    // Vue.component('todo-item', {
      // template: '\
      //   <li>\
      //     {{ title }}\
      //     <button v-on:click="$emit(\'remove\')">Remove</button>\
      //   </li>\
      // ',
      // props: ['title']
    // })

</script>