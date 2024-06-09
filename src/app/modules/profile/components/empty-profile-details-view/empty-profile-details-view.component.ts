import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-profile-details-view',
  templateUrl: './empty-profile-details-view.component.html',
  styleUrl: './empty-profile-details-view.component.scss'
})
export class EmptyProfileDetailsViewComponent {

  constructor(private router: Router){}
  
  addDetails() {
    this.router.navigate(['/edit-profile']);
  }

}
