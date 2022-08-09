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
        <div class="flex flex-row items-center mx-2">
            <div class="flex flex-col text-right mx-2">
                <div>{{navbar.profile.name}}</div>
                <div> {{navbar.profile.role}}</div>
            </div>
            <div>
                <img :src="`src/assets/images/${navbar.profile.avatar}`">
            </div>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
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
                    avatar: 'avatar.svg'
                }
            },
            deployed: false,
            
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
        }
    }
}
</script>

<style>
    .navbar{
        height:63px;
    }

</style>