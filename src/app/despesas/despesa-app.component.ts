import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despesa-app',
  template: `
  <router-outlet></router-outlet>
  `
})
export class DespesaAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
