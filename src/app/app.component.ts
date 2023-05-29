import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-world';

  public destruir: boolean = true;
  public addValue: number = 0;

  constructor() { }

  public add(){
    this.addValue += 2
  }
  ngOnInit(): void {
    
  }
}
