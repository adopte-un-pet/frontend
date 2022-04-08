import TextLoad from "@/components/Loaders/TextLoad/index.vue"
import Vue from "vue";
import { ValidationProvider } from 'vee-validate';
export default Vue.extend({
  name: "LoginForm",
  components: {TextLoad, ValidationProvider},
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
      console.log(ref)
      return await ref.validate();
    }
  },
  methods: {
    async handleSubmit() {
      console.log("formIsValid", await this.formIsValid)
    }
  }
})
