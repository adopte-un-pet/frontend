import SignupForm from "@/components/Forms/SignupForm/index.vue"
import Logo from "@/components/Branding/Logo/index.vue"
import media from "~/mixins/media";
type Body = {
  email: string,
  password: string
}
export default {
    name: "signup",
    components: {SignupForm, Logo},
    layout: "anonymous",
    mixins: [media],
    methods: {
      handleSubmit(form: Body){
        console.log(form)
      }
    }
}
