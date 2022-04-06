import LoginForm from "@/components/Forms/LoginForm/index.vue"
import Logo from "@/components/Branding/Logo/index.vue"
import media from "~/mixins/media";
type Body = {
  email: string,
  password: string
}
export default {
    name: "login",
    components: {LoginForm, Logo},
    layout: "anonymous",
    mixins: [media],
    methods: {
      handleSubmit(form: Body){
        console.log(form)
      }
    }
}
