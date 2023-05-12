import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  constructor() {}


  ngOnInit(): void {
  setInterval(()=>{
    if (this.condition){
      this.condition = false;
    } else{
      this.condition = true;
    }
  })  
  }
}
