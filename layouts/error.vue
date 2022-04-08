<template>
  <div class="error_container">
    <div class="error_content">
      <div class="sad_draw">
        <LogoSad/>
      </div>
      <div>
        <h1 class="error_title" v-if="error.statusCode === 404">404</h1>
        <h1 class="error_title" v-else>500</h1>

        <h2 class="error_subtitle" v-if="error.statusCode === 404">
          Oups! Page introuvable
        </h2>
        <h2 class="error_subtitle" v-else>
          Oups! {{ error.message }}
        </h2>
        <p class="error_message" v-if="error.statusCode === 404">
          {{ error.message }}
        </p>

        <b-link role="button" to="/" class="error_link btn btn-primary mt-2">
          revenir à l'accueil
        </b-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import LogoSad from "@/components/Branding/LogoSad/index.vue"
export default {
  components: {LogoSad},
  props: {
    error: {type: Object, default: {statusCode: 500, message: 'Une erreur est survenue'}},
  },
  layout: 'anonymous'
}
</script>

<style lang="scss">
.sad_draw {
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding-right: 10px;
  border-right: 1px solid #e3e3e3;

  & svg {
    width: 140px;
    height: 140px;
  }
}

.error_link {
  font-weight: 700;
  font-size: 18px;
}

.error_title {
  font-size: 65px;
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 10px;
  color: #151723;
  text-transform: uppercase;
}

.error_subtitle {
  font-size: 21px;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
  color: #151723;
}

.error_message {
  color: #999fa5;
  font-weight: 400;
  margin-top: 16px;
}

.error_content {
  display: flex;
  max-width: 560px;
  width: 100%;
  line-height: 1.1;
  justify-content: flex-start;
  padding: 0 32px;
}

.error_container {
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (max-width: 540px) {
  .sad_draw {
    justify-content: center;
    margin-right: 0;
    padding-right: 0;
    border-right: 0;
    border-bottom: 1px solid #e3e3e3;
  }
  .error_content {
    flex-direction: column;
  }
  .error_title, .error_subtitle, .error_message {
    text-align: center;
  }
.error_link {
  width: 100%;
}
}
</style>
