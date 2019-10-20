import { Component, OnInit } from '@angular/core';
import { DiarioService } from '../../services/diario.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DiarioService]
})
export class FormComponent implements OnInit {
  SERVER_URL = "http://127.0.0.1:8000/post/entradas/";
  public posts;
  postInput: FormGroup;
  response;
  selectedFile:File = null;

  constructor(private diarioService: DiarioService,
              private fb: FormBuilder,
              private httpClient:HttpClient) { }

  ngOnInit() {
    this.getPosts();

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

  submitPost() {
    console.log(this.postInput.value);
    const fd = new FormData();

    fd.append('titulo', this.postInput.get('titulo').value);
    fd.append('descripcion', this.postInput.get('descripcion').value);
    fd.append('imagen', this.selectedFile);
    console.log(fd);

    this.diarioService.postPost(fd)
       .subscribe(res => {
         console.log(res);
    },
    (err) => {
      console.log(err);
    });
      //Sin usar el servicio lo podriamos poner directamente asi:
    /* this.httpClient.post('http://127.0.0.1:8000/post/entradas/', fd)
      .subscribe(res => {
        console.log(res);
      }); */
  }

  getPosts() {
    this.diarioService.getPost()
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts);
      });
    }

}


