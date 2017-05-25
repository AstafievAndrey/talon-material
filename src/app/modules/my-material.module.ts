import { NgModule } from '@angular/core';

import { TextMaskModule } from 'angular2-text-mask';

import { MdProgressSpinnerModule, MdButtonModule, MdCheckboxModule, MdToolbarModule, MdMenuModule, MdIconModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    MdProgressSpinnerModule, MdButtonModule, MdCheckboxModule,    MdToolbarModule, MdMenuModule, MdIconModule, MdInputModule, TextMaskModule
  ],
  exports:[
    MdProgressSpinnerModule, MdButtonModule, MdCheckboxModule,    MdToolbarModule, MdMenuModule, MdIconModule, MdInputModule, TextMaskModule
  ],
  declarations: []
})
export class MyMaterialModule { }
