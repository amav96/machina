<template>
  <div 
  :class="[`${theme}-sidebar`,'flex flex-col sidebar justify-between py-3']" 
  :style="[deployed ? 'max-width: 260px;' : 'max-width: 68px;']">
      <div class="flex flex-col items-center ">
      <!-- first block -->
        <div
        :class="[deployed ? 'w-full' : '','flex flex-row sidebar__item m-1 py-2 px-2  items-center',
        `${theme}-sidebar-item`]"
        v-for="(item,index) in sidebar.firstBlock"
        :key="index"
        >
          <div class="flex justify-center" >
            <Media
            v-if="item.img || item.icon"
            :icon="item.icon"
            :img="item.img"
            />
            <ImgSvg
            v-if="item.svg"
            :name="item.svg"
            />
          </div>
          <div 
          v-if="deployed" 
          class="mx-2 sidebar__item__text">
            {{item.text}}
          </div>
        </div>
      <!-- second block -->
          <div 
          class="flex flex-row justify-between sidebar__static w-full mt-3 mb-0 items-center"
          v-for="(item,index) in sidebar.secondBlock"
          :key="index"
          >
            <template
              v-if="deployed" 
              >
              <div 
              :class="[`${theme}-sidebar-static`,'mx-2 sidebar__item__static']">
                {{item.text}}
              </div>
              <div
              :class="[`${theme}-sidebar-static`]"
              >
                <Media
                v-if="item.img || item.icon"
                :icon="item.icon"
                :img="item.img"
                />
                <ImgSvg
                v-if="item.svg"
                :name="item.svg"
                />
              </div> 
            </template>
            <template v-else>
              <div 
              :class="[`${theme}-sidebar-static`,'mx-auto sidebar__item__static']">
                --
              </div>
            </template>
          </div>
       
      <!-- third block -->
        <div
        :class="[deployed ? 'w-full' : '','flex flex-row sidebar__item m-1 py-2 px-2 items-center',
        `${theme}-sidebar-item`]"
        v-for="(item,index) in sidebar.thirdBlock"
        :key="index"
        >
          <div class="flex flex-row justify-between w-full">
            <div class="flex flex-row items-center">
              <div>
                <Media
                v-if="item.img || item.icon"
                :icon="item.icon"
                :img="item.img"
                />
                <ImgSvg
                v-if="item.svg"
                :name="item.svg"
                />
              </div>
              <div
              v-if="deployed"
              class="mx-2 sidebar__item__text">
                {{item.text}}
              </div>
            </div>
            <div v-if="deployed && item.dropdown" class="flex items-center mr-4">
              <Media
              v-if="item.img || item.iconDropdown"
              :icon="item.icon"
              :img="item.img"
              />
              <ImgSvg
              v-if="item.svgDropdown"
              :name="item.svgDropdown"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col items-center">
       <!-- fourth block -->
        <div 
        class="flex flex-row justify-between sidebar__static w-full mt-3 mb-0 items-center">
          <div 
          class="sidebar__item__static "
          :class="[deployed ? 'mx-2' : 'mx-auto',`${theme}-sidebar-static`]"
          >
            {{deployed ? sidebar.fourthBlock.text : '--'}}
          </div>
        </div>
         <!-- fifth block -->
        <div
          :class="[deployed ? 'w-full' : '','flex flex-row sidebar__item m-1 py-2 px-2  items-center',
          `${theme}-sidebar-item`
          ]"
          v-for="(item,index) in sidebar.fifthBlock"
          :key="index"
          >
          <div>
            <Media
            v-if="item.img || item.icon"
            :icon="item.icon"
            :img="item.img"
            />
            <ImgSvg
            v-if="item.svg"
            :name="item.svg"
            />
          </div>
          <div 
          v-if="deployed" 
          class="mx-2 sidebar__item__text">
            {{item.text}}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Media from './Media.vue'
export default {
  components:{Media},
  props:{
    sidebar: {
      type: Object,
    },
    deployed: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'light-mode'
    }
  },
}
</script>

<style>

 /* sidebar */

.light-mode-sidebar{
  background:#FFFFFF;
}

.light-mode-sidebar-item{
  background:#FFFFFF;
  color:rgb(104, 99, 99) !important;
}

.light-mode-sidebar-item:hover{
  color: white !important;
  background:var(--blue);
 
}

.light-mode-sidebar-static{
  background:#FFFFFF;
  color:#BABFC7 !important;
}

.light-mode-sidebar-item .svg-img{
  display: flex;
  
  fill:#6E6B7B ;
}
.light-mode-sidebar-item:hover .svg-img{
  fill:white ;
}

.light-mode-sidebar-static .svg-img{
  fill:#6E6B7B ;
}

.dark-mode-sidebar{
  background:#283046;
}

.dark-mode-sidebar-item{
  background:#2F3850;
  color:#C4C4C4;
}
.dark-mode-sidebar-item:hover{
  background:#F1BC01;
  color:#2F3850;
}


.dark-mode-sidebar-static{
  background:#2F3850;
  color:#C4C4C4;
}

.dark-mode-sidebar-item .svg-img{
  fill:#C4C4C4;
}
.dark-mode-sidebar-item:hover .svg-img{
  fill:#283046 ;
}

.sidebar{
  
  
  height: calc(100vh - 63px);
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  transition: all 0.1s;
  width: 100%;
  z-index: 99;
}

.sidebar::-webkit-scrollbar{
    display: block;
	  width: 2px !important;
    height: 7px !important;
  } 
.sidebar::-webkit-scrollbar-thumb {
    background: #a8a6a6;
    -webkit-border-radius: 1ex;
} 
.sidebar__item{
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  cursor:pointer;
  max-width: 230px;
  height:42px;
}
.sidebar__static{
  max-width: 230px;
  height:33px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
}
.sidebar__item__static{
  cursor:pointer;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 18px;
  text-align: left;

}
.sidebar__item__text{
  font-size: 15px;
  line-height: 24px;
}

</style>