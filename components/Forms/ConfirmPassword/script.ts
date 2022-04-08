import TextLoad from "@/components/Loaders/TextLoad/index.vue"
import Vue from "vue";
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default Vue.extend({
  name: "ConfirmPassword",
  components: {TextLoad, ValidationObserver, ValidationProvider},
  props: {
    ButtonText: {type: String, default: "Confirmer"}
  },
  data() {
    return {
      loading: false,
      password: "",
      password_confirm: ""
    }
  },
  computed: {
    async formIsValid(): Promise<boolean> {
      const ref = this.$refs['confirmObserver'] as Vue & { validate: () => boolean }
      return await ref?.validate();
    },
    formIsEmpty(): boolean {
      return this.password.length === 0 || this.password_confirm.length === 0;
    }
  },
  methods: {
    async handleSubmit(){
      if(await this.formIsValid){
        this.$emit('submit', this.password)
      }
    },
    formContainErrors(errors: {'Le mot de passe': [], 'La confirmation de mot de passe': []}): boolean{
      if(!errors) return false;
      if(!errors['Le mot de passe'] || !errors['La confirmation de mot de passe']) return false;
      return errors['Le mot de passe'].length > 0 || errors['La confirmation de mot de passe'].length > 0
    }
  }
})
