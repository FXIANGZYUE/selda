import {defineStore} from "pinia";

export const SystemStore = defineStore("system", {
    state: () => {
        return {
            "isDarkTheme": true
        }
    }
})