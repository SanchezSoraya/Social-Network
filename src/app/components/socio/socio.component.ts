import { Component, OnInit } from '@angular/core';
import { Social, SocialService } from '../../servicios/social.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent {
  social: any = {};


  constructor( private activatedRoute:ActivatedRoute, private _socialService: SocialService ) {
         this.activatedRoute.params.subscribe((params:any) => {
         console.log(params ['id']);
         this.social = this._socialService.getSocial();
         });
   }

  ngOnInit() {
    
  }
  
}
