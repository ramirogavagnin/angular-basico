import { Component } from '@angular/core'

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent {
    public title: string
    public list: string
    constructor() {
        this.title = 'Zapatillas'
        this.list = 'Listado de Zapatillas'
        console.log('Zapatillas Componenet')
    }
}
