import Vue from "vue";

export default Vue.extend({
    name: "LoginForm",
    props: {
      ButtonText: {type: String, default: "Confirmer"}
    },
    data(){
      return {
        text: "",
        form: {
          email: "",
          password: ""
        }
      }
    },
  methods: {
      log(arg: string): void{
        console.log(arg)
      },
    alertToto(val: string): void{
      if(val.toLowerCase() === "toto" ) this.$emit('toto', val)
    }
  },
  watch: {
    text(val: string, oldVal: unknown){
      this.alertToto(val)
    }
  }
})
