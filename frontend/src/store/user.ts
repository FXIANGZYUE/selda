import {defineStore} from "pinia";

export const UserStore = defineStore("user", {
    state: () => {
        return {
            "id": null,
            "permission":[]
        }
    }
})