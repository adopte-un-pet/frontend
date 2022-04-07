import Vue from "vue";
import * as VeeValidate from 'vee-validate';
const {ValidationProvider, ValidationObserver} = VeeValidate;
import {required, email, confirmed} from "vee-validate/dist/rules";


Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} ne peux pas être vide'
})
extend('confirmed', {
  ...required,
  message: 'Les mots de passe saisis ne sont pas identiques'
})

extend('password', {
  params: ['target'],
  validate(value: string, { target }) {
    return value === target;
  },
  message: 'Les mots de passe saisis ne sont pas identiques'
});

extend('email', {
  ...email,
  message: 'L\'email doit être valide'
})
