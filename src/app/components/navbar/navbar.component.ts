import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// Services 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService],
})
export class NavbarComponent {
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService, private router: Router) { }


  async onLogOut() {
    try{
      this.authSvc.logout();
      this.router.navigate(['/login'])
    }
    catch(error){
      console.log('error')
    }
  }
}
