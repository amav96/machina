<template>
  <div v-if="display || localDisplay" :class="classDropdown">
    <!-- dropdown -->
      <div
        v-for="(items, index) in dropdown"
        :key="index"
        :class="['flex flex-col cursor-pointer']"
      >
        <!-- items del primer dropdwon -->
        <div
          v-for="(item, i) in items"
          :key="i"
          :class="[
            (item.icon || item.img || item.svg) && item.dropdown ? `${getTheme}-item-first-node justify-between` : `${getTheme}-item-dropdown`,
            'flex flex-row p-2 py-3 items-center justify ',
            i === 0 && index === 0 ? !firstWithOutRounded ?  'rounded-t-md' : ' rounded-tl-md' : '',
            i === items.length - 1 && index === dropdown.length - 1
              ? 'rounded-b-md'
              : '',
          ]"
          @click="
            (item.icon || item.img || item.svg) && item.dropdown
              ? (item.displayDropdown = !item.displayDropdown)
              : null
          "
        >
          <div v-if="(item.icon || item.svg) && !item.dropdown" class="mx-1">
            <Media
              v-if="item.icon || item.img"
              :icon="item.icon"
              :img="item.img ? `src/assets/images/${item.img}` : ''"
              :cClass="`${getTheme}-media`"
            />
            <ImgSvg
            v-if="item.svg"
            :name="item.svg"
            />
          </div>
          <template v-if="(item.icon || item.img || item.svg) && item.dropdown">
            <div 
            class="flex flex-col"
            >
              <div 
              :class="['mx-2 font-bold']"
              >
                {{ item.text }}
              </div>
              <div :class="['mx-2',`${getTheme}-dropdown-main-subText`]">
                {{ item.subText }}
              </div>
            </div>
            <!-- second node -->
            <div class="mx-1 relative">
              <Media
                v-if="item.icon || item.img"
                :icon="item.icon"
                :img="item.img ? `src/assets/images/${item.img}` : ''"
                :cClass="`${getTheme}-media`"
              />
              <ImgSvg
              v-if="item.svg"
              :name="item.svg"
              />
              <!-- dropdwon -->
              <div
                v-if="item.displayDropdown"
                class="dropdown-second-node flex flex-col"
              >
                <div
                  v-for="(it, ii) in item.dropdown"
                  :key="ii"
                  class="flex flex-col"
                >
                  <div 
                  class="flex flex-row items-center justify-start px-4"
                  :class="[
                    `${getTheme}-item-dropdown`,
                    '',
                    ii === 0 ? 'rounded-t-md' : '',
                    ii === item.dropdown.length - 1 ? 'rounded-b-md' : '',
                    it.main ? `${getTheme}-header-node` : '',
                  ]"
                  :style="[
                    'width:208px;height:49px;',
                    it.main ? 'pointer-events: none;' : '',
                  ]"
                  >
                    <template v-if="it.main">
                      <div
                        :class="[
                          `${getTheme}-title-accounts`,
                          'font-bold',
                          'w-full h-full flex flex-row items-center',
                        ]"
                      >
                        {{ it.text }}
                      </div>
                      <div :class="[`dropdown-second-node__triangle`]"></div>
                    </template>
                    <template v-else>
                      <!-- <hr style="border-color:red;" >  -->
                      <div>
                        <span :class="['font-bold']">
                          {{ it.text }}
                        </span>
                        <span 
                        v-if="it.textContent" 
                        :class="['mx-1']">
                          {{ it.textContent }}
                        </span>
                      </div>
                      
                    </template>
                  </div>
                  <div>
                  <hr v-if="ii === 0" :class="`${getTheme}-hr-node`">
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="mx-2">
              {{ item.text }}
            </div>
          </template>
        </div>
        <hr
          v-if="index + 1 < dropdown.length"
          :class="[`${getTheme}-hr`]"
        />
      </div>
   
  </div>
</template>

<script>
import Media from "./Media.vue";
export default {
  components: { Media },
  props: {
    dropdown: {
      type: Object,
    },
    display: {
      type: Boolean,
      default: false,
    },
    theme:{
      type: String,
      default: ''
    },
    classDropdown: {
      type: String,
      default: 'dropdown'
    },
    firstWithOutRounded: {
      type: Boolean,
      default: false,
    }
  },
  computed:{
    getTheme(){
      if(this.theme){
        return this.theme
      }else{
        return this.$store.state.theme
      }
  
    }
  },
  data(){
    return {
      localDisplay:false,
    }
  },
  methods: {
    callMethod(method) {
      if (method && Object.prototype.hasOwnProperty.call(this, method)) {
        this[method]();
      } else {
        alert("Not supported");
      }
    },
  },
};
</script>

<style>

.light-mode-item-first-node{
   color:var(--blue);
  background: white;
}

.light-mode-item-first-node .svg-img{
   fill:rgb(104, 99, 99);
}
.light-mode-item-dropdown {
  background: white;
  color: rgb(104, 99, 99);
}

.light-mode-item-dropdown:hover {
  background: rgb(243, 241, 241);
}
.light-mode-item-dropdown .svg-img{
 fill:rgb(104, 99, 99);
}



.light-mode-title-accounts {
  color: var(--blue);
}

.light-mode-header-node {
  background: #ebe9f1;
}

.light-mode-header-node:hover {
  background: white;
}
.light-mode-dropdown-main-subText{
  color: rgb(104, 99, 99);
}

.light-mode-hr-node{
  border-color: white;
}

/* porfile components */

.dark-mode-item-first-node{
  color: var(--yellow);
  background: #384159;
}


.dark-mode-title-accounts:hover {
  color: var(--blue-dark);
}
.dark-mode-title-accounts > :hover {
  color: var(--blue-dark);
}
.dark-mode-header-node {
  background: var(--blue-dark-heavy) !important;
}
.dark-mode-header-node:hover {
  background: white;
  color: var(--blue-dark);
}

.dark-mode-title-accounts {
  color: white;
}
.dark-mode-title-accounts:hover {
  color: var(--blue-dark);
  background: white;
}

.dark-mode-item-dropdown {
  background: var(--blue-dark);
  color: #c4c4c4;
}

.dark-mode-item-dropdown:hover {
  background: #F1BC01;
  color: var(--blue-dark);
  font-weight: 500;
}


.dark-mode-item-first-node .svg-img{
   fill:#C4C4C4;
}
.dark-mode-item-dropdown .svg-img{
  fill:#C4C4C4;
}


.dark-mode-item-dropdown:hover .svg-img{
  fill:#283046;
}

.dark-mode-hr-node{
  border-color: #EBE9F1;
}

.dropdown-second-node__triangle {
  background: inherit;
  border-radius: 5px;
  height: 30px;
  position: absolute;
  right: -9px;
  rotate: 45deg;
  width: 30px;
  z-index: -1;
}

.dropdown-second-node {
  left: -416px;
  position: absolute;
  top: -15px;
  width: 208px;
  z-index: 5000;
}
</style>
