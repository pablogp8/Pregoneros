import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-layout-g',
  templateUrl: './layout-g.component.html',
  styleUrls: ['./layout-g.component.css']
})
export class LayoutGComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: '#E7071F'},
    {text: 'Two', cols: 1, rows: 4, color: '#93C21A'},
    {text: 'Three', cols: 1, rows: 1, color: '#FAC73A'},
    {text: 'Four', cols: 2, rows: 1, color: '#049EDA'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
