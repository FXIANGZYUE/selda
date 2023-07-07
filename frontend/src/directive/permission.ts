import type {DirectiveBinding, ObjectDirective} from "vue";

const permission: ObjectDirective<HTMLElement, string> = {
    mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
        const userPermission = ['q', 'r', 'w', 'd']
        if (!userPermission.includes(binding.value)) {
            el.parentNode?.removeChild(el)
        }
    }
}

export default permission

