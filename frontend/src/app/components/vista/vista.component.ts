import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiarioService } from 'src/app/services/diario.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  vistaDetalle:any = {};
  iden: number;
  isAddEditMode: boolean;
  isEdit: boolean;

  postInput: FormGroup;
  selectedFile:File = null;

  constructor( private activatedRoute: ActivatedRoute,
               private diarioService: DiarioService,
               private fb: FormBuilder,
               private httpClient:HttpClient) {
    this.activatedRoute.params.subscribe(res=> {
      this.iden = res['id'];
    });

    console.log(this.iden);
  }

  getDetalle() {
    this.diarioService.getPost()
      .subscribe(data => {
        this.vistaDetalle = data[this.iden];
        console.log(this.vistaDetalle);
      });
    }

    /* return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( data=> data['tracks'])); */

  ngOnInit() {
    this.getDetalle();

    this.postInput = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }
  onChange(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    /* if (event.target.files.length > 0) {
      const imagen = event.target.files[0];
      this.postInput.get('imagen').setValue(imagen);
    } */
  }



  editMovieClicked() {
    this.isEdit = true;
    this.isAddEditMode = true;
    this.postInput = this.fb.group({
      titulo: [this.vistaDetalle.titulo, Validators.required],
      descripcion: [this.vistaDetalle.descripcion, Validators.required],
      imagen: [this.vistaDetalle.imagen, Validators.required]
    });
   // this.selectedMovie = null;
  }

  submitPost() {
    console.log(this.postInput.value);
    const fd = new FormData();

    fd.append('titulo', this.postInput.get('titulo').value);
    fd.append('descripcion', this.postInput.get('descripcion').value);
    fd.append('imagen', this.selectedFile);
    console.log(fd);
    alert('Post agregado con exito');

    this.diarioService.editPost(fd, this.vistaDetalle.id)
       .subscribe(res => {
         console.log(res);
    },
    (err) => {
      console.log(err);
    });
  }

  deleteMovieClicked() {
    this.diarioService.deletePost(this.vistaDetalle.id).subscribe(
      response => {
        alert('Entrada borrada con exito');
        console.log("Post borrado con exito");
        this.isAddEditMode = false;
      });
  }

}
