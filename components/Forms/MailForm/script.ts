import TextLoad from "@/components/Loaders/TextLoad/index.vue"
import Vue from "vue";
import {ValidationObserver, ValidationProvider} from "vee-validate";
export default Vue.extend({
    name: "LoginForm",
    components: {TextLoad,ValidationProvider, ValidationObserver},
    props: {
      ButtonText: {type: String, default: "Confirmer"}
    },
    data(){
      return {
        loading: false,
        email: ""
      }
    },
  computed: {
    async formIsValid() {
      const ref = this.$refs.mailObserver as Vue & { validate: () => boolean }
      return await ref.validate();
    },
    formIsEmpty(): boolean {
      return this.email.length === 0;
    }
  },
  methods: {
    async handleSubmit() {
      if(await this.formIsValid){
        this.$emit('submit', this.email)
      }
    },
    formContainErrors(errors: {[key: string]: []}): boolean{
      if(!errors) return false;
      if(!errors['L\'email']) return false;
      return errors['L\'email'].length > 0
    }
  }
})
