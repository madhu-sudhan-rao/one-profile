import { Component } from '@angular/core';
import { BottomSheetService } from '../../../../shared/services/bottom-sheet.service';
import { UtilityService } from '../../../../shared/services/utility.service';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { User } from '../../models/user.model';

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
      { icon: 'pi pi-envelope', value: 'madhuspediredla@gmail.com' },
      { icon: 'pi pi-phone', value: '7382036544' },
      { icon: 'pi pi-instagram', value: 'Instagram', url: 'https://instagram.com/madhuu._.p?igsh=ZmpjdWtqOGlhcWp5&utm_source=qr'},
      { icon: 'pi pi-github', value: 'Github', url: 'https://github.com/madhu-sudhan-rao'},
      { icon: 'pi pi-linkedin', value: 'Linkedin', url: 'https://www.linkedin.com/in/madhu-sudhan-rao-pediredla-18588a1a3/'},
      { icon: 'pi pi-twitter', value: 'Twitter', url: 'https://twitter.com/madhu_pediredla'},
      { icon: 'snapchat', value: 'Snapchat', url: 'https://snapchat.com/add/madhu5815?share_id=ycdHba8OS3-g00WZoXr4fA&locale=en_IN'},
      
    ]
  };

  constructor(private utilityService: UtilityService, private bottomSheetService: BottomSheetService){}

  copyURL(url: string) {
    this.utilityService.copyToClipboard(url);
  }

  openShareOptions() {
    this.bottomSheetService.openBottomSheet(BottomSheetComponent)    
  }
}
