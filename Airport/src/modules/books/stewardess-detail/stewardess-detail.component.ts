import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-stewardess-detail',
  templateUrl: './stewardess-detail.component.html',
  styleUrls: ['./stewardess-detail.component.css']
})
export class StewardessDetailComponent implements OnInit {

  book = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails(id) {
    this.api.getBook(id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      });
  }

  deleteBook(id) {
    this.api.deleteBook(id)
      .subscribe(res => {
          this.router.navigate(['/stewardesses']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
