<template>
  <main v-if="!$fetchState.pending">
    <div>
      <Navbar/>
      <Nuxt/>
    </div>

    <section id="loading" class="center" style="height: 100vh;"  v-if="$fetchState.pending">
      <Loader/>
    </section>
  </main>
</template>

<script lang="ts">
import Navbar from "@/components/layouts/Navbar/index.vue"
import Loader from "@/components/Loaders/Loader/index.vue"
export default {
  name: "connected",
  components: {Navbar, Loader},
  middleware: 'auth',
  async fetch(){}
}
</script>
