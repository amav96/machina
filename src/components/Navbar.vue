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
        <div 
        class="flex flex-row items-center mx-2 cursor-pointer relative"
        
        >
            <div 
            @click="navbar.profile.method ? callMethod(navbar.profile.method) : null" 
            class="flex flex-col text-right mx-2">
                <div>{{navbar.profile.name}}</div>
                <div> {{navbar.profile.role}}</div>
            </div>
            <div 
            @click="navbar.profile.method ? callMethod(navbar.profile.method) : null"
            class="mx-3"
            >
                <img :src="`src/assets/images/${navbar.profile.avatar}`">
            </div>
            <!-- dropdown -->
            <div 
            v-if="dropdown"
            class="dropdown flex flex-col"
            >   
                <div
                v-for="(items,index) in navbar.profile.dropdown"
                :key="index"
                class="flex flex-col bg-white rounded"
                >
                    <!-- first node -->
                    <div 
                    v-for="(item,i) in items"
                    :key="i"
                    class="flex flex-row p-2 items-center"
                    :class="[item.icon && item.dropdown ? 'justify-between': '']"
                    @click="item.icon && item.dropdown ? item.displayDropdown = !item.displayDropdown : null" 
                    >
                        <div 
                        v-if="item.icon && !item.dropdown"
                        class="mx-1"
                         >
                            <img :src="`src/assets/images/${item.icon}`">
                        </div>
                        <template v-if="item.icon && item.dropdown">
                            <div class="flex flex-col">
                                <div class=" mx-2 c-text-blue font-bold">
                                    {{item.text}}
                                </div>
                                <div class=" mx-2 c-text-gray">
                                    {{item.subText}}
                                </div>
                            </div>
                            <!-- second node -->
                            <div 
                            class="mx-1 relative"
                            >
                                <img 
                                :src="`src/assets/images/${item.icon}`"
                                >
                                <!-- dropdwon -->
                                <div 
                                v-if="item.displayDropdown" 
                                class="dropdown-second-node flex flex-col">
                                    <div
                                    v-for="(it,ii) in item.dropdown"
                                    :key="ii"
                                    class="flex flex-row items-center justify-start px-4 bg-white text-black  rounded"
                                    :style="it.main ? 'background:#EBE9F1;' : ''"
                                    style="width:208px;height:49px;"
                                    >
                                        <template
                                        v-if="it.main"
                                        >
                                            <span
                                            class="c-text-blue font-bold"
                                            >
                                            {{it.text}}
                                            </span>
                                            <div class="dropdown-second-node__triangle"></div>
                                        </template>
                                        <template v-else>
                                            <span
                                            class="c-text-gray font-bold"
                                            >
                                            {{it.text}}
                                            </span>
                                            <span
                                            v-if="it.textContent"
                                            class="c-text-gray mx-1"
                                            >
                                             {{it.textContent}}
                                            </span>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class=" mx-2 c-text-gray">
                                {{item.text}}
                            </div>
                        </template>
                        
                    </div>
                    <hr>
                </div>
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
                    avatar: 'avatar.svg',
                    method: 'setDropdown',
                    dropdown: [
                        [
                            {icon : 'user.svg', text: 'Profile'},
                        ],
                        [
                            {
                                text: 'Teclab',
                                subText: ' 12829347',
                                icon: 'right.svg',
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
                            {icon : 'email.svg', text: 'Inbox'},
                            {icon : 'notifications2.svg', text: 'Notifications'},
                        ],
                        [
                            {icon : 'settings2.svg', text: 'Account Settings'},
                            {icon : 'receipt.svg', text: 'Billing'},
                            {icon : 'logout.svg', text: 'Log Out', method: 'logout'},
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
    .dropdown-second-node{
        position: absolute;
        top: -15px;
        left:-416px;
        width: 208px;
    }
    .dropdown-second-node__triangle{
        background:#EBE9F1;
        border-radius:5px;
        height:30px;
        width: 30px;
        position: absolute;
        right: -9px;
        rotate: 45deg
    }

</style>