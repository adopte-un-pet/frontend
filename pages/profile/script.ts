import UploadBanner from "@/components/Medias/UploadBanner/index.vue";
import UploadAvatar from "@/components/Medias/UploadAvatar/index.vue";
import ProfileForm from "@/components/Form/ProfileForm/index.vue";
import { mapActions } from "vuex";
import Vue from "vue"

export default Vue.extend({
    name: "profile",
    layout: "connected",
    components: {UploadBanner, UploadAvatar, ProfileForm},
    async fetch(){
        await this.refresh()
    },
    data(){
        return {
            user: {}
        }
    },
    methods: {
        ...mapActions('user', ['getUser']),
        async refresh(){
            this.user = await this.getUser();
        }
    }
})
