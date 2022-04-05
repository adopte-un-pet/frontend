<template>
  <div>
    <Navbar/>
    <main>
      <Nuxt/>
    </main>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/layouts/Navbar/index.vue"
export default {
  components: {Navbar}
}
</script>
