import LoginForm from "@/components/Forms/LoginForm/index.vue"
import Logo from "@/components/Branding/Logo/index.vue"
import media from "~/mixins/media";
import Vue from "vue";

type Body = {
  email: string,
  password: string
}
export default Vue.extend({
  name: "login",
  components: {LoginForm, Logo},
  head: {
    title: "Login",
    meta: [
      {hid: 'description', name: 'description', content: 'dehkefhkufehkufu'},
    ]
  },
  layout: "anonymous",
  mixins: [media],
  data() {
    return {
      text: "", name: "Jean", lastname: "bidule"
    }
  },
  computed: {
    fullName(): string {
      return this.name + " " + this.lastname
    }
  },
  methods: {
    handleSubmit(form: Body) {
      console.log(form)
    },
    handleToto(): void{
      // @ts-ignore
      this.$refs.LoginForm.log("bidule")
    }
  }
})
