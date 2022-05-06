import TextLoad from "@/components/Loaders/TextLoad/index.vue"
import {ValidationObserver, ValidationProvider} from "vee-validate";
import Vue from "vue";

export default Vue.extend({
    name: "SignupForm",
    components: {TextLoad, ValidationProvider, ValidationObserver},
    props: {
      ButtonText: {type: String, default: "Confirmer"}
    },
    data(){
      return {
        loading: false,
        form: {
          email: "",
          password: ""
        },
        selectedDepartment:"",
        departments: [
          {
            "num_dep": "01",
            "dep_name": "Ain",
            "region_name": "Auvergne-Rhône-Alpes"
          },
          {
            "num_dep": "02",
            "dep_name": "Aisne",
            "region_name": "Hauts-de-France"
          },
          {
            "num_dep": "03",
            "dep_name": "Allier",
            "region_name": "Auvergne-Rhône-Alpes"
          },
          {
            "num_dep": "04",
            "dep_name": "Alpes-de-Haute-Provence",
            "region_name": "Provence-Alpes-Côte d'Azur"
          },
          {
            "num_dep": "05",
            "dep_name": "Hautes-Alpes",
            "region_name": "Provence-Alpes-Côte d'Azur"
          },
          {
            "num_dep": "06",
            "dep_name": "Alpes-Maritimes",
            "region_name": "Provence-Alpes-Côte d'Azur"
          }
        ],
        selectedAnimalCategory:"",
        animalCategories:[
          {
            "name": "Chat",
            "description": ""
          },
          {
            "name": "Chien",
            "description": ""
          }
        ]
        
      }
    },
  computed: {
   
    async formIsValid() {
      const ref = this.$refs.signupObserver as Vue & { validate: () => boolean }
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
