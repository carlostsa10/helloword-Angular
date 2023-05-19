import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {

  public heightA:string = "20px"

  public valor: boolean = true;
  public backcolor: string = "dimgray";

  public nome: string = ""
  public list: Array <{nome: string}> = [{nome: "Ariana Grande"}];

  constructor() {}


  ngOnInit(): void {
    setInterval(()=>{
    if (this.heightA == "20px"){
    this.heightA = "45px"
    this.backcolor = "violet"
  
      } else {
    this.heightA = "20px"
    this.backcolor = "dimgray"
  
    }
    }, 3500)
    

  setInterval(()=>{
    if (this.valor){
      this.valor = false;
      
    } else{
      this.valor = true;
    }
  }, 3500);  
}


  public salvar(){
    this.list.push({nome: this.nome})
    this.nome = ""
  }


}

