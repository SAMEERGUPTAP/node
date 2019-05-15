import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SocailLinksComponent } from './socail/Socail-links.component';
import { SliderComponent } from './slider/slider.component';
import { ProfileComponent } from './profile/profile.component';
import { AppColor } from './UiKit/Color.directive';
import { HoverEffectDirective } from './UiKit/hover-effect.directive';
import { AboutComponent } from './about/about.component';
import { HoverMoveingDirective } from './UiKit/hover-moveing.directive';
import { ContactFromComponent } from './contact-from/contact-from.component';
import { FormsModule } from '@angular/forms';
import { PracticeComponent } from './practice/practice.component';
import { ReverseStr, tirm } from './UiKit/Pipes/custom.pipe';
import { DataService } from './service/cutomData.service';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SocailLinksComponent,
    SliderComponent,
    ProfileComponent,
    AppColor,
    HoverEffectDirective,
    AboutComponent,
    HoverMoveingDirective,
    ContactFromComponent,
    PracticeComponent,
    ReverseStr,
    tirm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
