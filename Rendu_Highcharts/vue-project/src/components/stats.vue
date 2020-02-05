<template>
  <div class="users">
     <doughnut/>
     <bar/>
     <linechart/>
  </div>

</template>


<script>   //Importation des components 
import bar from '@/components/bar.vue' 
import doughnut from '@/components/doughnut.vue' 
import linechart from '@/components/linechart.vue' 

export default {     // exportation de "app" et de tout ses components 
  name: 'stats',
  components: {
   bar,
   doughnut,
   linechart
  }
  
}
</script>

<style>
</style>
