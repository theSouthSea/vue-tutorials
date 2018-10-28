<template>
    <div>
        <p><a v-link="{path:'/home',activeClass:'active'}" >Home</a></p>
        <p><a v-link="{path:'/about',activeClass:'active'}">About</a></p>
        <p><a v-link="{path:'/TodoList',activeClass:'active'}">TodoList</a></p>
        <div class="title">下面是子组件</div>
        <h1 class="title">About组件</h1>
        <p>{{msg}}</p>
        <todo-list></todo-list>
    </div>
</template>
<script>
import todoList from './TodoList.vue';
    export default {
        components:{
            'todoList':todoList
        },
        data:function(){
            return {msg:'Hello! About component!'}
        }
    }
</script>
<style scoped>
    .title{
        font-size: 14px;
        color:#0f0;
    }
</style>