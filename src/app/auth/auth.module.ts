import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { LucideAngularModule, Eye, EyeOff} from 'lucide-angular';



@NgModule({
   declarations: [
      LoginComponent,
      RegisterComponent,
   ],
   imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      LucideAngularModule.pick({ Eye, EyeOff }), 

   ],

   exports: [
      LoginComponent,
      RegisterComponent
   ],
   providers: [
      AuthService,
      // Importamos el interceptor de JWT
      { 
         provide: JwtInterceptor,
         useClass: JwtInterceptor,
         multi: true
      }
   ]
})
export class AuthModule { }
