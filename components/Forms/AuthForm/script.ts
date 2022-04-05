export default {
    name: "AuthForm",
    props: {
      ButtonText: {type: String, default: "Confirmer"}
    },
    data(){
      return {
        form: {
          email: "",
          password: ""
        }
      }
    }
}
