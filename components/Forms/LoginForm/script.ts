export default {
    name: "LoginForm",
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
