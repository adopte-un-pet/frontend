export default {
    name: "SignupForm",
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
