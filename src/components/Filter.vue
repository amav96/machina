<template>
  <div v-if="localDisplay" class="flex flex-row">
    <div 
    v-for="(item,index) in filters"
    :key="index"
    class="flex flex-row items-center cursor-pointer"
    :class="[`${theme}-img-filter`]"
    >
        <div class="mx-2" >
            <ImgSvg
            :name="item.svg"
            />
        </div>
         <div class="mx-2">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['theme']),
    },
    props:{
        filters: {
            type: Array
        },

    },
    data(){
        return {
            localDisplay:true,
        }
    }
}
</script>

<style>
.light-mode-img-filter{
    color:#AA3EFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
}
.light-mode-img-filter .svg-img{
    fill:#AA3EFF;
    
}

.dark-mode-img-filter{
    color:var(--yellow);
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
}
.dark-mode-img-filter .svg-img{
    fill:var(--yellow);
    
}

</style>