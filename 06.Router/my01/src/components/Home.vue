<template>
    <div>
        <h1>{{title}}</h1>
        <user-info 
            v-for="item of userList"
            :name="item.name"
            :birthday="item.birthday"
            :sex="item.sex"
            :index="$index"
        ></user-info>
    </div>
</template>
<script>
import UserInfo from './UserInfo.vue';
    export default {
        components:{
            'user-info':UserInfo
        },
        data(){
            return {
                title:'这是Home component-cda',
                userList:[
                    {
                        name:'shaoyong',
                        sex:'man',
                        birthday:'1991-11-16'
                    },
                    {
                        name:'haonan',
                        sex:'woman',
                        birthday:'1990-06-13'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    body{
        background-color: #f0c;
    }
</style>