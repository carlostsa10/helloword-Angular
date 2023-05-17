import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {

  public height:string = "20px"

  public valor: boolean = true;
  public backcolor: string = "dimgray"

  constructor() {}


  ngOnInit(): void {

  setInterval(()=>{
    if (this.valor){
      this.valor = false;
      
    } else{
      this.valor = true;
    }
  }, 2000)  

  setInterval(()=>{
  if (this.height == "20px"){
  this.height = "45px"
  this.backcolor = "violet"

    } else {
  this.height = "20px"
  this.backcolor = "dimgray"

  }
  }, 2500)
  
  }
}
