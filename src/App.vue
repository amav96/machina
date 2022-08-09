<template>
  <main class="bg-app h-screen">
    <Navbar/>
    <Sidebar/>
    <router-view class="relative"></router-view>
  </main>
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

.bg-app{
  background:#F8F8F8;
}

</style>


