import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros = [
    {
      "id": 1,
      "title": "Harry Potter",
      "author": "J. K. Rowling"
    },
    {
      "id": 2,
      "title": "The Catcher in the Rye",
      "author": "J. D. Salinger"
    },{
      "id": 1,
      "title": "Harry Potter",
      "author": "J. K. Rowling"
    },
    {
      "id": 2,
      "title": "The Catcher in the Rye",
      "author": "J. D. Salinger"
    },{
      "id": 1,
      "title": "Harry Potter",
      "author": "J. K. Rowling"
    },
    {
      "id": 2,
      "title": "The Catcher in the Rye",
      "author": "J. D. Salinger"
    },{
      "id": 1,
      "title": "Harry Potter",
      "author": "J. K. Rowling"
    },
    {
      "id": 2,
      "title": "The Catcher in the Rye",
      "author": "J. D. Salinger"
    }
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
