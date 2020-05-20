import { capitalize } from '@core/utils'

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener!`)
        }

        this.$root = $root
        this.listeners = listeners
    }

    initDomListeners() {
       this.listeners.forEach(listener => {
           const method = getMethodName(listener)
           const name = this.name || ''

           if (!this[method]) {
               throw new Error(`
                Method ${method} is not implemeted in ${name} Component
               `)
           }

           this[method] = this[method].bind(this)
           this.$root.on(listener, this[method])
       })
    }

    removeDomListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

// Inpot => onInput
function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}