import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: 'star.component.html',
})
export class StarComponent implements OnInit {
  constructor() {}
  @Input() cropWidth: number | undefined;
  @Input() rating: number = 5;
  ngOnInit() {}
}
