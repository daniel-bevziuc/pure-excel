import {$} from '@core/dom'
import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            ...options
        })
    }

    toHTML() {
        return `
            <div class="formula-info">fx</div>
            <div 
                id="formula"
                class="formula-input"
                contenteditable="true"
                spellcheck="false"
            ></div>
        `
    }

    init() {
        super.init()

        this.$formula = this.$root.find('#formula')
        this.$on('Table:select', $cell => {
            this.$formula.text($cell.text())
        })

        this.$on('Table:Input', $cell => {
            this.$formula.text($cell.text())
        })
    }

    onInput(event) {
        this.$emit('Formula:Input', $(event.target).text())
    }

    onKeydown(event) {
        const keys = ['Enter', 'tab']
        if (keys.includes(event.key)) {
            event.preventDefault()

            this.$emit('Formula:Done')
        }
    }
}