import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

  constructor(private router: Router){}

  navigateToPage() {
    this.router.navigate(['/profile']);
  }

}
