<template>
    <div >
        <div class="flex flex-col my-2 relative px-4">
            <template
            v-for="(itemMain, iMain) in dashboard"
            :key="iMain"
            >
                <div class="flex flex-row justify-between h-16 mt-3  items-center section-main">
                    <div class="flex flex-row items-center">
                        <div :class="['mx-2 my-2 title-section' ,`${theme}-title-section`]">
                            {{itemMain.title}}
                        </div>
                        <template v-if="itemMain.infoSection">
                            <div 
                            v-for="(item,index) in itemMain.infoSection"
                            :key="index"
                            :class="['mx-1', `${theme}-action-icon`,'flex justify-center items-center']">
                            
                                
                                <template v-if="item.svg">
                                    <ImgSvg
                                    :name="item.svg"
                                    />
                                </template>
                            </div>
                        </template>
                    </div>
                    <!-- actions -->
                    <div v-if="itemMain.actions" class="flex flex-row items-center justify-end">
                        <div 
                        v-for="(item,index) in itemMain.actions"
                        :key="index"
                        class="flex flex-row items-center "
                        @click="item.method ? callMethod(item.method): ''"
                        >
                            <component 
                            v-if="item.component" :is="item.component" 
                            v-bind="item.props"
                            :ref="item.ref"
                            ></component>
                            <div
                            :class="['mx-1', 
                            `${theme}${item.aliasClass}`,`${theme}-${item.dynamicClass}`,'flex justify-center items-center flex flex-row']"
                            >

                            <template
                            
                            v-if="item.svg">
                            <ImgSvg
                            :name="item.svg"
                            />
                            </template>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="itemMain.content" class="mt-4">
                    <div
                    v-for="(item,index) in itemMain.content"
                    :key="index"
                    class="flex flex-row flex-wrap"
                    >
                        <div
                        :class="['box-item',`${theme}-box-item`]"
                        v-for="(it,ii) in item"
                        :key="ii"
                        :style="it.style"
                        >
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div :class="['footer-section',`${theme}-footer-section`, 'flex flex-row']">
            <img class="mx-2" :src="getImageUrl('COPYRIGHT.svg')">
            <img class="mx-2" :src="getImageUrl('EdMachina.svg')">
        </div>
    </div>
    
</template>

<script>

import { mapState } from 'vuex';
import Filter from '../components/Filter.vue';
export default {
    components:{
        Filter,
    },
    props:{
        dashboard: {
            type: Object,
        }
    },
    computed: {
        ...mapState(['theme']),
    },
    data(){
        return {
            filterDisplay:true,   
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
        setFilter(){
            if(this.$refs.refFilter){
                const [instance] = this.$refs.refFilter; 
                instance.localDisplay = !instance.localDisplay
            }
           
        },
        setOptions(){
            if(this.$refs.refOptions){
                const [instance] = this.$refs.refOptions; 
                instance.localDisplay = !instance.localDisplay
            }
            if(this.dashboard){
                this.dashboard.forEach((item,index) => {
                    if(item.actions){
                        item.actions.forEach((action,i) => {
                            if(action.component && action.component === 'Dropdown'){
                                if(this.dashboard[index].actions[i].dynamicClass == ''){
                                    this.dashboard[index].actions[i].dynamicClass = 'filter-select'
                                }else{
                                    this.dashboard[index].actions[i].dynamicClass = ''
                                }
                            }
                        })
                    }
                })
            }
        },
        getImageUrl(image) {
            return new URL(`../assets/images/${image}`, import.meta.url).href
        }
    }
    
}
</script>

<style>

.title-section{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 21px;
}
.light-mode-title-section{
    color: var(--blue);
}

.light-mode-action-icon, .light-mode-action-icon-dropdown{
    color :#6E6B7B;
    height: 42px;
    width: 45px;
    cursor:pointer;
}

.light-mode-action-icon .svg-img{
    fill :#6E6B7B;
}
.light-mode-action-icon:hover .svg-img{
    fill :white;
}

/*nuevos*/

.light-mode-action-icon-dropdown .svg-img{
    fill :#6E6B7B;
}

.light-mode-action-icon-dropdown:hover .svg-img{
    fill :var(--blue);
}

.light-mode-filter-select{
    background:white;
    border-radius: 5px 5px 0 0;
}
.light-mode-filter-select .svg-img{
    fill :var(--blue) !important;
}
/*nuevos*/

.light-mode-action-icon:hover{
    background:var(--blue);
    color:white;
    border-radius: 5px;
}
.light-mode-box-item{
    background: #FFFFFF;
}

/*dark mode*/

.dark-mode-title-section{
    color: #ffffff;
}

.dark-mode-action-icon, .dark-mode-action-icon-dropdown{
    color :#C3C3C3 ;
    height: 42px;
    width: 45px;
    cursor:pointer;
}

.dark-mode-action-icon .svg-img{
     fill :#C3C3C3;
}
.dark-mode-action-icon:hover .svg-img{
     fill :white;
}

.dark-mode-action-icon:hover{
    background:var(--yellow);
    color:white;
    border-radius: 5px;
}

/*nuevos*/

.dark-mode-action-icon-dropdown .svg-img{
    fill :#C3C3C3;
}


.dark-mode-action-icon-dropdown:hover .svg-img{
    fill :white;
}

.dark-mode-filter-select{
    background:#384159;
    border-radius: 5px 5px 0 0;
}
.dark-mode-filter-select .svg-img{
    fill :white !important;
}

.dark-mode-box-item{
    background: #283046;
}
/*nuevos*/

.dropdown-dashboard{
    top:65px;
    right: 20px;
    height:100%;
    min-height: 100px;
    position: absolute;
    width: 208px;
    min-width: 208px;
    z-index: 20;
}


.box-item{

    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
}

.footer-section{
    height:51px;
    padding: 15px 21px;
    margin-left:none !important;
    width:100%;
}
.footer-section img:first-child {
    width:137px;
    height:21px;
}
.footer-section img:last-child {
    width:81px;
    height:21px;
 
}


.light-mode-footer-section{
    background:#8C80F9;
    color:white;
}
.dark-mode-footer-section{
    background:#000000;
    color:white;
}


</style>