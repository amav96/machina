<template>
  <main 
  :class="[`${theme}-bg-app`,' h-screen relative']">
    <Navbar
    :navbar="navbar"
    :theme="theme"
    @onDeploy="deployed = $event"
    />
    <Sidebar
    :sidebar="sidebar"
    :theme="theme"
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
        sidebar: {
            firstBlock: [
              {icon: 'home', text: 'Dashboard'},
              {icon: 'calendar-alt', text: 'Calendar'},
            ],
            secondBlock: [
              {icon: 'receipt', text: 'REPORTS'},
            ],
            thirdBlock: [
              {icon: 'plus-square',  text: 'Machina Hi'},
              {icon: 'arrow-alt-circle-up', text: 'Heads Up'},
              {icon: 'sync', text: 'Stay Around'},
              {icon: 'chart-bar', text: 'Analytics'},
              {icon: 'chart-line', text: 'My Reports'},
            ],
            fourthBlock: {text: 'Settings'},
            fifthBlock: [
              {icon: 'user', text: 'Manage Users'},
              {icon: 'cloud-download', text: 'Cloud Connect'},
              {icon: 'arrows-alt', text: 'Api Manager'},
              {icon: 'question-circle', text: 'Help/Support'},
            ],
        },
        navbar: {
          menu:{
              icon: 'menu.svg', deployedIcon:'menu.svg' , method: 'setDeploy',
          },
          logo:{
              icon : 'logo.png'
          },
          firstBlock: [
              {icon:'search.svg'},
              {icon:'dark_mode.svg' , method : 'setTheme'},
              {icon:'settings.svg'},
              {icon:'notifications.svg', notifications: 4}
          ],
          profile:{
              name: 'Jane Doe',
              role: 'Admin',
              avatar: 'avatar.svg',
              method: 'setDropdown',
              dropdown: [
                  [
                      {icon : 'user', text: 'Profile'},
                  ],
                  [
                      {
                          text: 'Teclab',
                          subText: ' 12829347',
                          img: 'right.svg',
                          displayDropdown: false,
                          dropdown: [
                              {
                                  main: true,
                                  text: 'All Accounts'
                              },
                              {
                                  text: 'Teclab: ', textContent: '12829347'
                              },
                              {
                                  text: 'IPP: ', textContent: '12829333'
                              },
                          ]
                      }
                  ],
                  [
                      {icon : 'envelope', text: 'Inbox'},
                      {icon : 'bell', text: 'Notifications'},
                  ],
                  [
                      {icon : 'cog', text: 'Account Settings'},
                      {icon : 'receipt', text: 'Billing'},
                      {icon : 'sign-out', text: 'Log Out', method: 'logout'},
                  ],
              ]
          }
        },
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


