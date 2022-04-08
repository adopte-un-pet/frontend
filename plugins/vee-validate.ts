import Vue from "vue";
import {email, required} from "vee-validate/dist/rules";
import {extend, setInteractionMode} from 'vee-validate';


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
  validate(value: string, params: Record<string, any>) {
    return value === params.target;
  },
  message: 'Les mots de passe saisis ne sont pas identiques'
});

extend('email', {
  ...email,
  message: 'L\'email doit être valide'
})
