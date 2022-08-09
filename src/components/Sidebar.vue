<template>
  <div class="flex flex-col sidebar justify-between py-3" :style="[deployed ? 'max-width: 260px;' : 'max-width: 68px;']">
      <div class="flex flex-col items-center ">
      <!-- first block -->
        <div
        :class="[deployed ? 'w-full' : '','flex flex-row sidebar__item m-1 py-2 px-2  items-center',
        `${theme}-sidebar-item`]"
        v-for="(item,index) in navbar.firstBlock"
        :key="index"
        >
          <div class="flex justify-center">
          <Media
          :icon="item.icon"
          :img="item.img"
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
          class="flex flex-row justify-between sidebar__static w-full mt-3 mb-1 items-center"
          v-for="(item,index) in navbar.secondBlock"
          :key="index"
          >
            <template
              v-if="deployed" 
              >
              <div class="mx-2 sidebar__item__static">
                {{item.text}}
              </div>
              <div>
              <Media
              :icon="item.icon"
              :img="item.img"
              />
              </div> 
            </template>
            <template v-else>
              <div class="mx-auto sidebar__item__static">
                --
              </div>
            </template>
          </div>
       
      <!-- third block -->
        <div
        :class="[deployed ? 'w-full' : '','flex flex-row sidebar__item m-1 py-2 px-2 items-center',
        `${theme}-sidebar-item`]"
        v-for="(item,index) in navbar.thirdBlock"
        :key="index"
        >
          <div>
            <Media
            :icon="item.icon"
            :img="item.img"
            />
          </div>
          <div
          v-if="deployed" 
          class="mx-2 sidebar__item__text">
            {{item.text}}
          </div>
        </div>
      </div>
      
      <div class="flex flex-col items-center">
       <!-- fourth block -->
        <div 
        class="flex flex-row justify-between sidebar__static w-full mt-3 mb-1 items-center">
          <div 
          class="sidebar__item__static "
          :class="deployed ? 'mx-2' : 'mx-auto'"
          >
            {{deployed ? navbar.fourthBlock.text : '--'}}
          </div>
        </div>
         <!-- fifth block -->
        <div
          :class="[deployed ? 'w-full' : '','flex flex-row sidebar__item m-1 py-2 px-2  items-center',
          `${theme}-sidebar-item`
          ]"
          v-for="(item,index) in navbar.fifthBlock"
          :key="index"
          >
          <div>
            <Media
            :icon="item.icon"
            :img="item.img"
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
import { mapState } from 'vuex';
import Media from './Media.vue'
export default {
  components:{Media},
  computed: {
        ...mapState(['theme']),
  },
  props:{
    deployed: {
      type: Boolean,
      default: false,
    }
  },
  data(){
    return {
      navbar: {
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
      }
    }
  }
}
</script>

<style>


.sidebar{
  background:#FFFFFF;
  height: calc(100vh - 63px);
  overflow-y: auto;
  position: absolute;
  transition: all 0.1s;
  width: 100%;
  z-index: 99;
}

.sidebar::-webkit-scrollbar{
    display: block;
	  width: 4.5px !important;
    height: 7px !important;
  } 
.sidebar::-webkit-scrollbar-thumb {
    background: #a8a6a6;
    -webkit-border-radius: 1ex;
} 
.sidebar__item{
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  cursor:pointer;
  max-width: 230px;
}
.sidebar__static{
  background: #FFFFFF;
  max-width: 230px;
}
.sidebar__item__static{
  color: #BABFC7;
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