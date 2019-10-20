import { Component } from '@angular/core';


@Component({
    selector: 'app-body',
    templateUrl: `./body.component.html`
})

export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'Mueres siendo un heroe o vives lo suficiente para convertirte en villano',
        autor: 'Harvey Dent'
    };

    personajes: String[] = ['Venom','Carnage','Blackcat'];

}