import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-stewardess-create',
  templateUrl: './stewardess-create.component.html',
  styleUrls: ['./stewardess-create.component.css']
})
export class StewardessCreateComponent implements OnInit {

  bookForm: FormGroup;
  isbn = '';
  title = '';
  description = '';
  author = '';
  publisher = '';
  published_year = '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      'isbn' : [null, Validators.required],
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'author' : [null, Validators.required],
      'publisher' : [null, Validators.required],
      'published_year' : [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.postBook(form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/stewardess-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
