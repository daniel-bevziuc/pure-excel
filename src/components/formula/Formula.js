import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    toHTML() {
        return `
            <div class="formula-info">fx</div>
            <div class="formula-input"
            contenteditable="true"
            spellcheck="false"></div>
        `
    }
}