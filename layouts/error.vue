<template>
  <div class="error_container">
    <div class="error_content">
      <div class="sad_draw">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="188.000000pt" height="188.000000pt" viewBox="0 0 188.000000 188.000000"
             preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,188.000000) scale(0.100000,-0.100000)"
             fill="#000000" stroke="none">
            <path d="M807 1800 c-186 -32 -358 -122 -488 -257 -74 -76 -112 -129 -156
-218 -215 -430 -40 -945 394 -1164 34 -17 102 -43 150 -58 77 -23 106 -26 228
-27 161 0 232 14 361 74 116 54 189 106 279 202 117 124 198 288 225 458 57
367 -137 738 -475 907 -159 80 -352 110 -518 83z m263 -30 c404 -64 710 -422
710 -830 0 -459 -381 -840 -840 -840 -224 0 -428 86 -591 249 -132 132 -211
284 -239 461 -87 557 403 1047 960 960z"/>
            <path d="M623 1118 c-26 -13 -53 -65 -53 -103 0 -42 29 -92 61 -105 81 -34
147 72 104 165 -15 30 -51 56 -78 54 -7 0 -22 -5 -34 -11z"/>
            <path d="M1183 1118 c-26 -13 -53 -65 -53 -103 0 -42 29 -92 61 -105 81 -34
147 72 104 165 -15 30 -51 56 -78 54 -7 0 -22 -5 -34 -11z"/>
            <path d="M800 697 c-36 -12 -89 -37 -118 -56 -50 -32 -142 -124 -142 -142 0
-5 29 9 65 31 228 140 404 142 654 8 93 -50 94 -50 72 -20 -31 45 -108 107
-172 142 -118 63 -246 76 -359 37z"/>
          </g>
        </svg>
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

        <b-link role="button" to="/" class="error_link btn btn-primary">
          revenir à l'accueil
        </b-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
}

.error_container {
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
