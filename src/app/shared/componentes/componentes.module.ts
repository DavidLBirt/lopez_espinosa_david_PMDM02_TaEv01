import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderTabComponent } from './header-tab/header-tab.component';


@NgModule({
  declarations: [HeaderTabComponent],
  exports: [HeaderTabComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
