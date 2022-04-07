import TextLoad from "@/components/Loaders/TextLoad/index.vue"
export default {
    name: "LoginForm",
    components: {TextLoad},
    props: {
      ButtonText: {type: String, default: "Confirmer"}
    },
    data(){
      return {
        loading: false,
        email: ""
      }
    }
}
