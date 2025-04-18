import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Icons
import { LucideAngularModule, Tag, MoveRight } from 'lucide-angular';
import { RouterModule } from '@angular/router';




@NgModule({
   declarations: [
      HeaderComponent,
      FooterComponent

   ],
   imports: [
      CommonModule,
      LucideAngularModule.pick({ Tag, MoveRight }),
      RouterModule
   ],
   exports: [
      HeaderComponent,
      FooterComponent,
      LucideAngularModule

   ]


})
export class SharedModule { }
