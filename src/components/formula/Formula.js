import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        })
    }

    toHTML() {
        return `
            <div class="formula-info">fx</div>
            <div class="formula-input"
            contenteditable="true"
            spellcheck="false"></div>
        `
    }

    onInput(event) {
        console.log(event.target.textContent.trim())
    }

    onClick() {
        console.log('MK')
    }
}