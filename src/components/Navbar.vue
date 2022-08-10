<template>
  <nav 
  :class="['flex items-center justify-between text-white navbar', `${theme}-navbar`]">
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
            class="mx-2 cursor-pointer relative"
            v-for="(item,index) in navbar.firstBlock"
            :key="index"
            @click="item.method ? callMethod(item.method) : null"
             >
                <img class="fs"  :src="`src/assets/images/${item.icon}`">
                <div 
                v-if="item.notifications && item.notifications > 0"
                class="notifications-navbar">
                    <div class="text">
                    {{item.notifications}}
                    </div>
                </div>
            </div>
        </div>
        <!-- profile -->
        <Profile
        :profile="navbar.profile"
        :dropdown="dropdown"
        @onDropdown="setDropdown()"
        :theme="theme"
        />
    </div>
  </nav>
</template>

<script>
import {mapActions} from 'vuex';
import Profile from '../components/Profile.vue'
export default {
    components:{Profile},
    props:{
        theme:{
            type: String,
            default: 'light-mode'
        },
        navbar:{
            type: Object
        }
    },
    data(){
        return {
            deployed: false,
            dropdown: false,
            
        }
    },
    methods: {
        ...mapActions(['changeTheme']),
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
        },
        setTheme(){
            this.changeTheme();
        }
    }
}
</script>

<style>

    .light-mode-navbar{
        background:var(--blue);
    }

    .dark-mode-navbar{
        background:var(--dark);
    }

    .notifications-navbar{
        align-items: center;
        background:red;
        border-radius: 50%;
        display: flex;
        height: 18px;
        justify-content: center;
        position: absolute;
        right: -10px;
        text-align: center;
        top: -11px;
        width: 18px;
        z-index: 50;

    }
    .notifications-navbar .text{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
    }

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
        z-index: 20;
    }

</style>