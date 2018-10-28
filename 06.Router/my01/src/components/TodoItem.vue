<template>
    <li>
        {{title}}
        <!-- <div v-text="title"></div> -->
        <!-- <button v-on:click="$emit('remove')">Remove</button> -->
        <button @click="deleteHandle">Remove</button>
    </li>
</template>
<script>
export  default {
    props: ['title','id'], // title不显示是vue1.0的原因
    methods:{
        deleteHandle(){
            console.log('title',this.title,this.id);
            this.$emit('delete',this.id);
        }
    }
}    
</script>