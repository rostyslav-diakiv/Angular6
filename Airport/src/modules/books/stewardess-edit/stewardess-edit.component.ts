import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-stewardess-edit',
  templateUrl: './stewardess-edit.component.html',
  styleUrls: ['./stewardess-edit.component.css']
})
export class StewardessEditComponent implements OnInit {

  bookForm: FormGroup;
  id = '';
  isbn = '';
  title = '';
  description = '';
  author = '';
  publisher = '';
  published_year = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
    this.bookForm = this.formBuilder.group({
      'isbn' : [null, Validators.required],
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'author' : [null, Validators.required],
      'publisher' : [null, Validators.required],
      'published_year' : [null, Validators.required]
    });
  }

  getBook(id) {
    this.api.getBook(id).subscribe(data => {
      this.id = data._id;
      this.bookForm.setValue({
        isbn: data.isbn,
        title: data.title,
        description: data.description,
        author: data.author,
        publisher: data.publisher,
        published_year: data.published_year
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.updateBook(this.id, form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/stewardess-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  bookDetails() {
    this.router.navigate(['/stewardess-details', this.id]);
  }
}
