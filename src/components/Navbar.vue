<template>
  <nav class="c-bg-blue flex items-center justify-between text-white navbar">
    <!-- menu y logo -->
    <div class="flex flex-row items-center">
        <div 
        @click="navbar.menu.method ? callMethod(navbar.menu.method) : null"
        class="ml-6 cursor-pointer">
            <img  
            :src="`src/assets/images/${deployed ? navbar.menu.deployedIcon : navbar.menu.icon}`"
            >
        </div>
        <div 
        class="mx-6">
            <img  
            :src="`src/assets/images/${navbar.logo.icon}`"
            >
        </div>
    </div>
    <!-- first Block -->
    <div class="flex flex-row items-center">
        <!-- items -->
        <div class="flex flex-row">
            <div
            class="mx-2"
            v-for="(item,index) in navbar.firstBlock"
            :key="index"
             >
                <img class="fs"  :src="`src/assets/images/${item.icon}`">
            </div>
        </div>
        <!-- profile -->
        <Profile
        :profile="navbar.profile"
        :dropdown="dropdown"
        @onDropdown="setDropdown()"
        />
    </div>
  </nav>
</template>

<script>
import Profile from '../components/Profile.vue'
export default {
    components:{Profile},
    data(){
        return {
            navbar: {
                menu:{
                    icon: 'menu.png', deployedIcon:'search.svg' , method: 'setDeploy',
                },
                logo:{
                    icon : 'logo.png'
                },
                firstBlock: [
                    {icon:'search.svg'},
                    {icon:'dark_mode.svg'},
                    {icon:'settings.svg'},
                    {icon:'notifications.svg'}
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
            deployed: false,
            dropdown: false,
            
        }
    },
    methods: {
        callMethod(method){
            if(method && Object.prototype.hasOwnProperty.call(this, method)){
                this[method]()
            }else{
                alert('Not supported')
            }
        },
        setDeploy(){
            this.deployed = !this.deployed;
            this.$emit('onDeploy', this.deployed)
        },
        setDropdown(){
            this.dropdown = !this.dropdown;
        }
    }
}
</script>

<style>

    .navbar{
        height:63px;
    }
    .dropdown{
        bottom:-105px;
        right: 0;
        height:100%;
        min-height: 100px;
        position: absolute;
        width: 100%;
        min-width: 208px;
    }

</style>