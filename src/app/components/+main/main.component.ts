import {Component, OnInit, HostListener} from '@angular/core';
import {MdSnackBar, MdSnackBarConfig, LiveAnnouncer} from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  providers: [MdSnackBar,LiveAnnouncer]
})
export class MainComponent implements OnInit {

  public toolbar:any[];
  public mTop:number;
  public mask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/];
  public talon:string = "";
  public alert:any = {class:'',message:'',hidden:true};

  constructor(public snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.initToolbar();
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
      this.mTop = (window.innerHeight-400)/2;
  }

  public findTalon():boolean{
    console.log(this.talon);
    if(this.talon==''){
      this.alert = {class:'alert-warning',message:'Введите номер талона.',hidden:false};
      return false;
    }
    if(this.talon.indexOf('_')!==-1){
      this.alert = {class:'alert-warning',message:'Заполните до конца талон.',hidden:false};
      return false;
    }
    this.alert = {hidden:true};
    if(this.talon=="00.0000.00000.000"){
      this.alert = {class:'alert-success',message:'Талон найден',hidden:false};
    }
    return true;
  }

  private initToolbar(){
    this.toolbar = [
      {name:'Справочная информация',link:'#',icon:'textsms',hidden:'',visible:''},
      {name:'Нормативно-справочная информация',link:'#',icon:'list',hidden:'hidden-xs',visible:'visible-xs'},
      {name:'Новости',link:'#',icon:'subtitles',hidden:'hidden-sm hidden-xs',visible:'visible-sm visible-xs'},
      {name:'Опросы',link:'#',icon:'question_answer',hidden:'hidden-xs',visible:'visible-xs'},
      {name:'Поиск мед.организации по виду ВМП',link:'#',icon:'search',hidden:'hidden-md hidden-sm hidden-xs',visible:'visible-md visible-sm visible-xs'},
    ];
  }

}
