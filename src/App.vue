<template>
  <main 
  :class="[`${theme}-bg-app`,' h-screen relative']">
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
import { mapState } from 'vuex';
export default {
    components:{
        Navbar,
        Sidebar
    },
    computed: {
        ...mapState(['theme']),
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

.open{
  margin-left: 270px;
  transition: all 0.1s;
}
.closed{
  margin-left: 78px;
  transition: all 0.1s;
}

</style>


