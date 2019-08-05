import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { VideoJuegosComponent } from '../components/video-juegos/VideoJuegos.component'
import { ZapatillasComponent } from '../components/zapatillas/Zapatillas.component'
import { CursosComponent } from '../components/cursos/cursos.component'

@NgModule({
    declarations: [AppComponent, VideoJuegosComponent, ZapatillasComponent, CursosComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
