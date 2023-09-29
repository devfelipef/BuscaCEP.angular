import { Component } from '@angular/core';
import { CepBuscaService } from './service/cep-busca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cep:string = '';
  cepData:any = [];
  

  constructor(private cepService:CepBuscaService) { }

  pesquisarCep(){
    this.cepService.getCep(this.cep).subscribe((data:any)=>{
      this.cepData = data;
      console.log(this.cepData);
    });
    
  }

}
