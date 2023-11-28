import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderTabComponent } from './header-tab/header-tab.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';

@NgModule({
  declarations: [HeaderTabComponent, ExploreContainerComponent],
  exports: [HeaderTabComponent, ExploreContainerComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
