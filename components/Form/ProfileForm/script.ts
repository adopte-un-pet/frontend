import Avatar from "@/components/Common/Avatar/index.vue";
import Vue from "vue";

export default  Vue.extend ({
    name: "ProfileForm",
    components: {Avatar},
    data(){
      return {
        profile: {
          jobTitle: "",
          email: ""
        }
      }
    },
    methods: {
        async getUser(id: number) {
        
        },

        async mounted() {
          }
    }
})

