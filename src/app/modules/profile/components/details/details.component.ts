import { Component } from '@angular/core';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { BottomSheetService } from '../../../../shared/services/bottom-sheet.service';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { UtilityService } from '../../../../shared/services/utility.service';

interface UserDetail {
  icon: string;
  value: string;
  url?: string;
}
interface User {
  id: string;
  realName: string;
  userName: string;
  details: UserDetail[];
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  user: User = {
    id: '9621f574-8277-4596-9c65-4bf00a75af3b',
    realName: 'Madhu Sudhan Rao',
    userName: '@madhu._.p',
    details: [
      { icon: 'mail', value: 'madhuspediredla@gmail.com' },
      { icon: 'phone', value: '7382036544' },
      { icon: 'instagram', value: 'Instagram', url: 'https://instagram.com/madhuu._.p?igsh=ZmpjdWtqOGlhcWp5&utm_source=qr'},
      { icon: 'github_circle', value: 'Github', url: 'https://github.com/madhu-sudhan-rao'},
      { icon: 'linkedin-box', value: 'Linkedin', url: 'https://www.linkedin.com/in/madhu-sudhan-rao-pediredla-18588a1a3/'},
      { icon: 'twitter', value: 'Twitter', url: 'https://twitter.com/madhu_pediredla'},
      { icon: 'snapchat', value: 'Snapchat', url: 'https://snapchat.com/add/madhu5815?share_id=ycdHba8OS3-g00WZoXr4fA&locale=en_IN'},
      
    ]
  };

  constructor(private utilityService: UtilityService, private _bottomSheetService: BottomSheetService){}

  copyURL(url: string) {
    this.utilityService.copyToClipboard(url);
  }

  openShareOptions() {
    this._bottomSheetService.openBottomSheet(BottomSheetComponent)    
  }
}
