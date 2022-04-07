import TextLoad from "@/components/Loaders/TextLoad/index.vue"
export default {
    name: "SignupForm",
    components: {TextLoad},
    props: {
      ButtonText: {type: String, default: "Confirmer"}
    },
    data(){
      return {
        loading: false,
        form: {
          email: "",
          password: ""
        }
      }
    }
}
