import { Component, OnInit } from '@angular/core';
import { SocialService, Social } from '../../servicios/social.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  social: Social[] =[]; 



  constructor( private _socialService: SocialService, private router:Router) { }

  ngOnInit() {
    this.social=this._socialService.getSocial();
    console.log(this.social);
  }

  verSocial (idx:number){
    //console.log(idx);
    this.router.navigate(['/social', idx]);
  }
}







