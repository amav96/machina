<template>
  <div class="flex flex-col sidebar justify-between" :style="[deployed ? 'max-width: 260px;' : 'max-width: 68px;']">
      <div class="flex flex-col items-center ">
      <!-- first block -->
        <div
        class="flex flex-row sidebar__item m-1 py-2 px-2  items-center"
        :class="[deployed ? 'w-full' : '']"
        v-for="(item,index) in navbar.firstBlock"
        :key="index"
        >
          <div class="flex justify-center">
            <img   :src="`src/assets/images/sidebar/${item.icon}`">
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
                <img :src="`src/assets/images/sidebar/${item.icon}`">
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
        class="flex flex-row sidebar__item m-1 py-2 px-2 items-center"
        :class="[deployed ? 'w-full' : '']"
        v-for="(third,index) in navbar.thirdBlock"
        :key="index"
        >
          <div>
            <img   :src="`src/assets/images/sidebar/${third.icon}`">
          </div>
          <div
          v-if="deployed" 
          class="mx-2 sidebar__item__text">
            {{third.text}}
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
          class="flex flex-row sidebar__item m-1 py-2 px-2  items-center"
          :class="[deployed ? 'w-full' : '']"
          v-for="(item,index) in navbar.fifthBlock"
          :key="index"
          >
          <div>
            <img   :src="`src/assets/images/sidebar/${item.icon}`">
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
export default {
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
          {icon: 'home.svg', text: 'Dashboard'},
          {icon: 'calendar.svg', text: 'Calendar'},
        ],
        secondBlock: [
          {icon: 'list_alt.svg', text: 'REPORTS'},
        ],
        thirdBlock: [
          {icon: 'more.svg', text: 'Machina Hi'},
          {icon: 'up.svg', text: 'Heads Up'},
          {icon: 'sync.svg', text: 'Stay Around'},
          {icon: 'graf.svg', text: 'Analytics'},
          {icon: 'graf.svg', text: 'My Reports'},
        ],
        fourthBlock: {text: 'Settings'},
        fifthBlock: [
          {icon: 'user.svg', text: 'Manage Users'},
          {icon: 'down.svg', text: 'Cloud Connect'},
          {icon: 'x.svg', text: 'Api Manager'},
          {icon: 'question.svg', text: 'Help/Support'},
        ],
      }
    }
  }
}
</script>

<style>
.sidebar{
  position: absolute;
  z-index: 99;
  width: 100%;
  height: calc(100vh - 63px);
  background:#FFFFFF;
  overflow-y: auto;
  transition: all 0.1s
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
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  max-width: 230px;
  cursor:pointer;
}
.sidebar__static{
  background: #FFFFFF;
  max-width: 230px;
}
.sidebar__item__static{
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: #BABFC7;
  cursor:pointer;

}
.sidebar__item__text{
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #6E6B7B;
}

</style>