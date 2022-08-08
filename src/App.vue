<template>
  <Navbar/>
  <Sidebar/>
  <router-view></router-view>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
export default {
    components:{
        Navbar,
        Sidebar
    }
}
</script>

<style  lang="css">
@import './assets/app.css';

</style>


