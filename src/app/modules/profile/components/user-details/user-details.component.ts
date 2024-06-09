import { Component, Input } from '@angular/core';
import { UtilityService } from '../../../../shared/services/utility.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input() user!: any;

  constructor(private utilityService: UtilityService) {}

  copyURL(url: string) {
    this.utilityService.copyToClipboard(url);
  }

}
