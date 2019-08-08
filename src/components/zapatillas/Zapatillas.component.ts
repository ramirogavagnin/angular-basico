import { Component, OnInit } from '@angular/core'
import { Zapatilla } from '../../models/Zapatilla'

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit {
    public title: string
    public list: string
    public zapatillas: Array<Zapatilla>
    constructor() {
        this.title = 'Zapatillas'
        this.list = 'Listado de Zapatillas'
        this.zapatillas = [
            new Zapatilla('Reebook Clasic', 'Reebook', 'Blancas', 80, true),
            new Zapatilla('Botas', 'Timberland', 'Mostaza', 120, true),
            new Zapatilla('Zapatos', 'Hush Puppies', 'Chocolate', 95, false),
        ]
        // console.log('componenete zapatillas')
    }
    ngOnInit() {
        console.log(this.zapatillas)
        // console.log('OnInit Zapatillas')
    }
}
