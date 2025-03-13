import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss',
})
export class AlbumComponent {
  isUpdate: boolean = false;

  formMovie: FormGroup = new FormGroup({});

  constructor() {
    this.formMovie = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(''),
      description: new FormControl(''),
      time: new FormControl(''),
      image: new FormControl(''),
      status: new FormControl(true),
    });
  }
}
