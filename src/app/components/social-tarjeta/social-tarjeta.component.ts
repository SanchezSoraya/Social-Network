import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-tarjeta',
  templateUrl: './social-tarjeta.component.html',
  styleUrls: ['./social-tarjeta.component.css']
})
export class SocialTarjetaComponent implements OnInit {
  @Input() social: any ={};
  @Input() index: number =0; 

  @Output() socialSeleccionado: EventEmitter <number>; 
  constructor( private router:Router) {
    this.socialSeleccionado = new EventEmitter(); 
   }

  ngOnInit() {
  }
  verSocial (){
    this.router.navigate(['/social', this.index]);
  }

}


 
