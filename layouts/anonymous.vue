<template>
    <main>
      <Nuxt v-if="$fetchState.pending"/>
      <div class="center" style="height: 100vh;"  v-if="!$fetchState.pending">
        <Loading/>
      </div>

    </main>
</template>

<script lang="ts">
import Loading from "@/components/Common/Loader/index.vue"
export default {
  name: "anonymous",
  components: {Loading},
  async fetch(){}
}
</script>
