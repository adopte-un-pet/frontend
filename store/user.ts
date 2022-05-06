import { $axios } from '~/utils/api'
export const state = () => ({})
/*get State*/
export const getters = {
}
/*Appel api etc...*/
export const actions = {
    async getUser() {
        const user = await $axios.$get('/user/1')
        return user;
    } 
}
export const mutations = {}