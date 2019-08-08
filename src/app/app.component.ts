import { Component } from '@angular/core'
import { Config } from '../models/config'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public title = Config.titulo
    public mostrar_videojuegos: boolean = true
    public descripcion: string
    public config

    constructor() {
        this.config = Config
        this.descripcion = Config.descripcion
    }

    ocultarVideojuegos() {
        this.mostrar_videojuegos = !this.mostrar_videojuegos
    }
}
