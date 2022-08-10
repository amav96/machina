<template>
  <main 
  :class="[`${theme}-bg-app`]">
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
    class="relative main-app"
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
              {svg: 'home', text: 'Dashboard'},
              {svg: 'calendar', text: 'Calendar'},
            ],
            secondBlock: [
              {svg: 'list_alt', text: 'REPORTS'},
            ],
            thirdBlock: [
              {svg: 'square',  text: 'Machina Hi'},
              {svg: 'up', text: 'Heads Up'},
              {svg: 'sync', text: 'Stay Around'},
              {svg: 'graphics2', text: 'Analytics'},
              {svg: 'graphics', text: 'My Reports', dropdown: [], svgDropdown: 'navigate_next'},
            ],
            fourthBlock: {text: 'Settings'},
            fifthBlock: [
              {svg: 'user', text: 'Manage Users'},
              {svg: 'cloud', text: 'Cloud Connect'},
              {svg: 'x', text: 'Api Manager'},
              {svg: 'question', text: 'Help/Support'},
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
              {method : 'setTheme',  context: 'theme'},
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
                      {svg : 'user', text: 'Profile'},
                  ],
                  [
                      {
                          text: 'Teclab',
                          subText: ' 12829347',
                          svg: 'navigate_next',
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
                      {svg : 'email', text: 'Inbox'},
                      {svg : 'notifications', text: 'Notifications'},
                  ],
                  [
                      {svg : 'settings', text: 'Account Settings'},
                      {svg : 'receipt', text: 'Billing'},
                      {svg : 'logout', text: 'Log Out', method: 'logout'},
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
  
 .main-app{

  max-height: calc(100vh - 55px);
  overflow-y: scroll;
 }

 .main-app::-webkit-scrollbar{
    display: none;

} 

.open{
  margin-left: 270px;
  transition: all 0.1s;
}
.closed{
  margin-left: 69px;
  transition: all 0.1s;
}



</style>


