import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-state-talon',
  templateUrl: 'state-talon.component.html',
  styleUrls: ['state-talon.component.css']
})
export class StateTalonComponent implements OnInit {

  private talonId:number;
  public hiddenSpinner:any = false;

  constructor(
              private route: ActivatedRoute,
              private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.talonId = +params['id'];
    });
  }

  //тут будет запрос к бд для получения информации о талоне
  ngOnInit() {
    console.log(this.talonId);
    setTimeout(()=>{
      this.hiddenSpinner = true;
    },3000);
  }

}
