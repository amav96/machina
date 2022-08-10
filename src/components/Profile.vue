<template>
  <div class="flex flex-row items-center mx-2 cursor-pointer relative">
    <!-- perfil data -->
    <div
      @click="profile.method ? callMethod(profile.method) : null"
      class="flex flex-col text-right mx-2"
    >
      <div class="text-profile">{{ profile.name }}</div>
      <div class="text-profile">{{ profile.role }}</div>
    </div>
    <div
      @click="profile.method ? callMethod(profile.method) : null"
      class="mx-3"
    >
      <Media
        :icon="profile.icon"
        :img="`src/assets/images/${profile.avatar}`"
        :cClass="`${theme}-media`"
      />
    </div>
    <!-- dropdown -->
    <div v-if="dropdown" class="dropdown">
      <div
        v-for="(items, index) in profile.dropdown"
        :key="index"
        :class="['flex flex-col']"
      >
        <!-- items del primer dropdwon -->
        <div
          v-for="(item, i) in items"
          :key="i"
          :class="[
            (item.icon || item.img) && item.dropdown ? `${theme}-item-first-node justify-between` : `${theme}-item-profile`,
            'flex flex-row p-2 items-center',
            i === 0 && index === 0 ? 'rounded-t' : '',
            i === items.length - 1 && index === profile.dropdown.length - 1
              ? 'rounded-b'
              : '',
          ]"
          @click="
            (item.icon || item.img) && item.dropdown
              ? (item.displayDropdown = !item.displayDropdown)
              : null
          "
        >
          <div v-if="item.icon && !item.dropdown" class="mx-1">
            <Media
              :icon="item.icon"
              :img="item.img ? `src/assets/images/${item.img}` : ''"
              :cClass="`${theme}-media`"
            />
          </div>
          <template v-if="(item.icon || item.img) && item.dropdown">
            <div 
            class="flex flex-col"
            >
              <div 
              :class="['mx-2 font-bold']"
              >
                {{ item.text }}
              </div>
              <div :class="['mx-2',`${theme}-dropdown-main-subText`]">
                {{ item.subText }}
              </div>
            </div>
            <!-- second node -->
            <div class="mx-1 relative">
              <Media
                :icon="item.icon"
                :img="item.img ? `src/assets/images/${item.img}` : ''"
                :cClass="`${theme}-media`"
              />
              <!-- dropdwon -->
              <div
                v-if="item.displayDropdown"
                class="dropdown-second-node flex flex-col"
              >
                <div
                  v-for="(it, ii) in item.dropdown"
                  :key="ii"
                  :class="[
                    `${theme}-item-profile`,
                    'flex flex-row items-center justify-start px-4',
                    ii === 0 ? 'rounded-t' : '',
                    ii === item.dropdown.length - 1 ? 'rounded-b' : '',
                    it.main ? `${theme}-header-node` : '',
                  ]"
                  :style="[
                    'width:208px;height:49px;',
                    it.main ? 'pointer-events: none;' : '',
                  ]"
                >
                  <template v-if="it.main">
                    <div
                      :class="[
                        `${theme}-title-accounts`,
                        'font-bold',
                        'w-full h-full flex items-center',
                      ]"
                    >
                      {{ it.text }}
                    </div>
                    <div :class="[`dropdown-second-node__triangle`]"></div>
                  </template>
                  <template v-else>
                    <span :class="['font-bold']">
                      {{ it.text }}
                    </span>
                    <span 
                    v-if="it.textContent" 
                    :class="['mx-1']">
                      {{ it.textContent }}
                    </span>
                  </template>
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
          v-if="index + 1 < profile.dropdown.length"
          :class="[`${theme}-hr`]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Media from "./Media.vue";
export default {
  components: { Media },
  props: {
    profile: {
      type: Object,
    },
    dropdown: {
      type: Boolean,
      default: false,
    },
    theme:{
      type: String,
      default: 'light-mode'
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
    setDropdown() {
      this.$emit("onDropdown");
    },
  },
};
</script>

<style>
.text-profile{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
}
/* profile components */

.light-mode-item-first-node{
   color:var(--blue);
  background: white;
}
/*
.light-mode-item-first-node:hover{
  background: var(--blue);
  color:white;
}
*/
.light-mode-item-profile {
  background: white;
  color: rgb(104, 99, 99);
}

.light-mode-item-profile:hover {
  background: var(--blue);
  color:white;
}

.light-mode-title-profile {
  color: var(--blue);
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

/* porfile components */


.dark-mode-item-first-node{
  color: var(--yellow);
  background: #384159;
}
/*
.dark-mode-item-first-node:hover{
  color: white !important;
  background: var(--yellow);
}
*/

.dark-mode-title-accounts:hover {
  color: var(--blue-dark);
}
.dark-mode-title-accounts > :hover {
  color: var(--blue-dark);
}
.dark-mode-header-node {
  background: var(--blue-dark);
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

.dark-mode-item-profile {
  background: #384159;
  color: #c4c4c4;
}

.dark-mode-item-profile:hover {
  background: #F1BC01;
  color: var(--blue-dark);
  font-weight: 500;
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
