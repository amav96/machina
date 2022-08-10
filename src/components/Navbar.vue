<template>
  <nav 
  :class="['flex items-center justify-between text-white navbar', `${theme}-navbar`]">
    <!-- menu y logo -->
    <div class="flex flex-row items-center">
        <div 
        @click="navbar.menu.method ? callMethod(navbar.menu.method) : null"
        class="ml-6 cursor-pointer">
            <img  
            :src="getImageUrl(`${deployed ? navbar.menu.deployedIcon : navbar.menu.icon}`)"
            >
        </div>
        <div 
        class="mx-6">
            <img  
            :src="getImageUrl(navbar.logo.icon)"
            >
        </div>
    </div>
    <!-- first Block -->
    <div class="flex flex-row items-center relative">
        <!-- items -->
        <div class="flex flex-row">
            <div
            class="mx-1 cursor-pointer relative flex items-center justify-center "
            style="min-width:28px;min-height:30px;text-alig:center;"
            v-for="(item,index) in navbar.firstBlock"
            :key="index"
            @click="item.method ? callMethod(item.method) : null"
             >  
                <template 
                v-if="item.context && item.context === 'theme'"
                >
                    <img :src="getImageUrl(`${theme === 'dark-mode' ?  'light-mode': 'dark-mode'}.svg`)" >
                </template>
                <template v-else>
                    <img   :src="getImageUrl(item.icon)">
                </template>
                <div 
                v-if="item.notifications && item.notifications > 0"
                class="notifications-navbar">
                    <div class="text">
                    {{item.notifications}}
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row items-center mx-2 cursor-pointer relative">
            <!-- perfil data -->
            <div
            @click="navbar.profile.method ? callMethod(navbar.profile.method) : null"
            class="flex flex-col text-right mx-2"
            >
            <div class="text-profile">{{ navbar.profile.name }}</div>
            <div class="text-profile">{{ navbar.profile.role }}</div>
            </div>
            <div
            @click="navbar.profile.method ? callMethod(navbar.profile.method) : null"
            class="mx-3"
            >
            <Media
                :icon="navbar.profile.icon"
                :img="getImageUrl(navbar.profile.avatar)"
                :cClass="`${theme}-media`"
            />
            </div>
        </div>
        <!-- profile -->
        <Dropdown
        classDropdown='dropdown-profile'
        :dropdown="navbar.profile.dropdown"
        :display="dropdown"
        :theme="theme"
        />
    </div>
  </nav>
</template>

<script>
import {mapActions} from 'vuex';
import Media from "./Media.vue";
export default {
 
    components:{Media},
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
        },
        getImageUrl(image) {
            return new URL(`../assets/images/${image}`, import.meta.url).href
        }
    }
}
</script>

<style>

    .navbar{
        height:63px;
    }
    .text-profile{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
    }

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
        right: -4px;
        text-align: center;
        top: -6px;
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

    .dropdown-profile{
        top:49px;
        right: 10px;
        height:100%;
        min-height: 100px;
        position: absolute;
        width: 208px;
        min-width: 208px;
        z-index: 25;
    }

</style>