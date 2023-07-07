import {App} from "vue";


let directives = import.meta.glob("./*.ts", {
    eager: true
})

export default {
    install(app: App) {
        for (let path in directives) {
            let temp = directives as Record<string, any>
            let name: string = path.replaceAll(/(.\/)|(.ts)/g, "")
            if (temp && temp[path].default) {
                app.directive(name, temp[path].default)
            } else {
                console.warn(`${name} register fail`)
            }
        }
    }
}


