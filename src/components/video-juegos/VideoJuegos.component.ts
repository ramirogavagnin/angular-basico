import { Component } from '@angular/core'

@Component({
    selector: 'videojuego',
    templateUrl: './video-juegos.component.html',
})
export class VideoJuegosComponent {
    public title: string
    public list: string
    constructor() {
        console.log('componente VideoJuegos')
        this.title = 'VideoJuegos'
        this.list = 'Listado de VideoJuegos'
    }
}
