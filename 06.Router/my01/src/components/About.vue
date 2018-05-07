<template>
    <div>
        <p><a v-link="{path:'/home',activeClass:'active'}" >Home</a></p>
        <p><a v-link="{path:'/about',activeClass:'active'}">About</a></p>
        <div class="title">下面是子组件</div>
        <h1 class="title">About组件</h1>
        <p>{{msg}}</p>
    </div>
</template>
<script>
    export default {
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