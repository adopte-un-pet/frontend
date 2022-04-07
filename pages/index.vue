<template>
  <section>
    <h1>{{ today | dateToString}}</h1>
    <Example/>
    <Map/>
  </section>
</template>

<script lang="ts">
import Example from "@/components/Example/index.vue"
import Map from "@/components/Map/index.vue"
import moment from 'moment'
 export default {
   components: {Example, Map},
   data(){
     return {
       today: moment()
     }
   }
 }
</script>
