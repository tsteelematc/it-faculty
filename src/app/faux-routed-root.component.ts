import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faux-routed-root',
  template: '<router-outlet></router-outlet>',
})
export class FauxRoutedRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
