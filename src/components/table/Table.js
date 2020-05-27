import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from '@/components/table/table.size'
import {shoudlResize} from '@/components/table/table.functions'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }

    toHTML() {
        return createTable(1000)
    }

    onMousedown(event) {
        if (shoudlResize(event)) {
            resizeHandler(this.$root, event)
        }
    }
}
