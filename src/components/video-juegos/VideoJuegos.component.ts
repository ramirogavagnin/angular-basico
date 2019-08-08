import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'

@Component({
    selector: 'videojuego',
    templateUrl: './video-juegos.component.html',
})
export class VideoJuegosComponent implements OnInit, DoCheck, OnDestroy {
    public title: string
    public list: string
    constructor() {
        //   console.log('componente VideoJuegos')
        this.title = 'VideoJuegos'
        this.list = 'Listado de VideoJuegos'
    }
    ngOnInit() {
        //   console.log('OnInit VideoJuegos')
    }
    ngDoCheck() {
        //    console.log('DoCheck VideoJuegos')
    }
    ngOnDestroy() {
        //    console.log('Componenete de Videojuegos OnDestroy')
    }
    cambiarTitulo() {
        this.title = 'Nuevo Titulo para VideoJuegos'
    }
}
