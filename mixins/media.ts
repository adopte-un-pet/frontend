import Vue from "vue";

export default Vue.extend({
  data(){
    return {
      mediaLoaded: false
    }
  },
  methods: {
    showAfterLoad() {
      this.mediaLoaded = true;
    },
  },
})
