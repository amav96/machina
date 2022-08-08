<template>
  <div class="c-bg-blue flex items-center justify-between text-white navbar">
    <!-- first block -->
    <div class="flex flex-row items-center">
        <div class="mx-2">
            <img src="@/assets/images/menu.png">
        </div>
        <div style="margin-left:21px;" >
            <img class="fs" src="@/assets/images/logo.png">
        </div>
    </div>
    <!-- second block -->
    <div class="flex flex-row items-center">
        <!-- items -->
        <div class="flex flex-row">
            <div
            class="mx-2"
            v-for="(item,index) in [{icon:'search.svg'},{icon:'dark_mode.svg'},{icon:'settings.svg'},{icon:'notifications.svg'}]"
            :key="index"
             >
                <img class="fs"  :src="`src/assets/images/${item.icon}`">
            </div>
        </div>
        <!-- profile -->
        <div class="flex flex-row items-center mx-2">
            <div class="flex flex-col text-right mx-2">
                <div>Jane Doe</div>
                <div> Admin</div>
            </div>
            <div>
                <img  src="@/assets/images/avatar.svg">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .navbar{
        height:63px;
    }

</style>