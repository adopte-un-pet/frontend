<template>

  <main v-if="!$fetchState.pending">
    <div>
      <Navbar/>
      <div class="dashboard_container">
        <NavigationMenu/>
        <Nuxt/>
      </div>

    </div>

    <section id="loading" class="center" style="height: 100vh;"  v-if="$fetchState.pending">
      <Loader/>
    </section>
  </main>
</template>

<script lang="ts">
import Navbar from "@/components/layouts/Navbar/index.vue"
import NavigationMenu from "@/components/layouts/NavigationMenu/index.vue"
import Loader from "@/components/Loaders/Loader/index.vue"
export default {
  components: {Navbar, Loader, NavigationMenu},
  async fetch(){}
}
</script>

<style>
  .dashboard_container {
    min-height: calc(100vh - calc(var(--navbar-height) + 1px));
    background: #f7f7f8;
  }
</style>
