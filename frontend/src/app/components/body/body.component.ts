import { Component } from '@angular/core';
import { DiarioService } from '../../services/diario.service';


@Component({
    selector: 'app-body',
    templateUrl: `./body.component.html`
})

export class BodyComponent {
  public posts;

  constructor(private diarioService: DiarioService) {

  }
  ngOnInit() {
    this.getPosts();
  }

    mostrar = true;

    frase: any = {
        mensaje: 'Mueres siendo un heroe o vives lo suficiente para convertirte en villano',
        autor: 'Harvey Dent'
    };

    personajes: String[] = ['Venom','Carnage','Blackcat'];

    getPosts() {
      this.diarioService.getPost()
        .subscribe(data => {
          this.posts = data;
          console.log(this.posts);
        });
      }

}
