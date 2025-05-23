import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { AuthService } from 'src/app/core/services/auth.service';
import { AvatarService } from 'src/app/core/services/avatar.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  // Current User
  userId!: number;
  user!: User;
  // menu nav
  activetab: 'general' | 'Opiniones' = 'general';
  // state of rating button
  ratingActivate = false;

  constructor(
    private authService: AuthService,
    private avatarService: AvatarService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const paramId = this.activatedRoute.snapshot.paramMap.get('id');
    if (paramId !== null) {
      this.userId = Number(paramId);
    }
    
    console.log(this.userId);
    this.loadUser();
  }

  loadUser() {
    if (this.userId !== null) {
      this.authService.fetchUserById(this.userId).subscribe((userData: User) => {
        this.user = userData;
        console.log(this.user);

      });
    }
    else
      console.error('No se ha encontrado el usuario.');

  }

  getAvatar() {
    return this.avatarService.getAvatarById(this.user.avatar);
  }

  navigateExplore() {
    this.router.navigate(['dashboard/explorar']);
  }

  toggleRating() {
    this.ratingActivate = !this.ratingActivate;
  }

  navigateToChatUser() {
    this.router.navigate(['dashboard/chat/chat-usuario/' + this.user.id]);
  }





}
