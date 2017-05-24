import { NgModule } from '@angular/core';

import { TextMaskModule } from 'angular2-text-mask';

import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdMenuModule, MdIconModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule, MdCheckboxModule,    MdToolbarModule, MdMenuModule, MdIconModule, MdInputModule, TextMaskModule
  ],
  exports:[
    MdButtonModule, MdCheckboxModule,    MdToolbarModule, MdMenuModule, MdIconModule, MdInputModule, TextMaskModule
  ],
  declarations: []
})
export class MyMaterialModule { }
