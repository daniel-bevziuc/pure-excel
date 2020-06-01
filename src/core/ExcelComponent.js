import { DomListener } from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribers = []

        this.prepare()
    }

    // Configure our component to ours init()
    prepare() {

    }

    // Return template component
    toHTML() {
        return ''
    }

    // Notify listeners of the event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }


    // Subscribe on event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    // Initialize component
    // Added DOM listeners
    init() {
        this.initDomListeners()
    }

    // Delete component
    // Clear listeners
    destroy() {
        this.removeDomListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}