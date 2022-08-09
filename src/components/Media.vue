<template>
    <img :class="cClass" v-if="img" :src="img">
    <font-awesome-icon :class="cClass" v-if="icon" :icon="icon"/>
</template>

<script>
export default {
    props:{
        icon: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        cClass: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>