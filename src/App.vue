<template>
  <main 
  :class="[`${theme}-bg-app`]">
    <Navbar
    :navbar="app.navbar"
    :theme="theme"
    @onDeploy="deployed = $event"
    />
    <Sidebar
    :sidebar="app.sidebar"
    :theme="theme"
    :deployed="deployed"
    />
    <router-view 
    class="relative main-app"
    :class="[deployed ? 'open' : 'closed']"
    :dashboard="app.dashboard"
    >
    </router-view>
 
  </main>
  
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import machina from './assets/json/machina.json'
import { mapState } from 'vuex';
export default {
    components:{
        Navbar,
        Sidebar
    },
    computed: {
        ...mapState(['theme']),
    },
    created(){
      this.app = machina
    },
    data(){
      return {
        deployed: false,
        app: {}
      }
    }
}
</script>

<style  lang="css">
@import './assets/app.css';
  
 .main-app{

  max-height: calc(100vh - 55px);
  overflow-y: scroll;
 }

 .main-app::-webkit-scrollbar{
    display: none;

} 

.open{
  margin-left: 261px;
  transition: all 0.1s;
}
.closed{
  margin-left: 69px;
  transition: all 0.1s;
}



</style>


