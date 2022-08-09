<template>
  <main class="bg-app h-screen">
    <Navbar
    @onDeploy="deployed = $event"
    />
    <Sidebar
    :deployed="deployed"
    />
    <router-view 
    class="relative"
    :class="[deployed ? 'open' : 'closed']"
    >
    </router-view>
  </main>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
export default {
    components:{
        Navbar,
        Sidebar
    },
    data(){
      return {
        deployed: false,
      }
    }
}
</script>

<style  lang="css">
@import './assets/app.css';

.bg-app{
  background:#F8F8F8;
  position:relative;
}

.open{
  margin-left: 270px;
  transition: all 0.1s;
}
.closed{
  margin-left: 78px;
  transition: all 0.1s;
}

</style>


