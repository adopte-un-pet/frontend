import TextLoad from "@/components/Loaders/TextLoad/index.vue"
import Vue from "vue";
import {ValidationObserver, ValidationProvider} from 'vee-validate';
export default Vue.extend({
  name: "LoginForm",
  components: {TextLoad, ValidationProvider, ValidationObserver},
  props: {
    ButtonText: {type: String, default: "Confirmer"}
  },
  data() {
    return {
      loading: false,
      form: {
        email: "",
        password: ""
      }
    }
  },
  computed: {
    async formIsValid() {
      const ref = this.$refs.loginObserver as Vue & { validate: () => boolean }
      return await ref.validate();
    },
    formIsEmpty(): boolean {
      return this.form.email.length === 0 || this.form.password.length === 0;
    }
  },
  methods: {
    async handleSubmit() {
      if(await this.formIsValid){
        this.$emit('submit', this.form)
      }
    },
    formContainErrors(errors: {[key: string]: []}): boolean{
      if(!errors) return false;
      if(!errors['Le mot de passe'] || !errors['L\'email']) return false;
      return errors['Le mot de passe'].length > 0 || errors['L\'email'].length > 0
    }
  }
})
