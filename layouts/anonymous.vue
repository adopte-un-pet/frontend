<template>
    <main>
      <Nuxt v-if="!$fetchState.pending"/>
      <section id="loading" class="center" style="height: 100vh;"  v-if="$fetchState.pending">
        <Loader/>
      </section>
    </main>
</template>

<script lang="ts">
import Loader from "@/components/Common/Loader/index.vue"
export default {
  name: "anonymous",
  components: {Loader},
  async fetch(){}
}
</script>
