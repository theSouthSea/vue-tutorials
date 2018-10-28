<template>
    <dl>
        <dt>{{name}}</dt>
        <dd>{{sex}}</dd>
        <dd>{{birthday}}</dd>
    </dl>
</template>
<script>
    export default {
        props:['name','birthday','sex']
    }
</script>