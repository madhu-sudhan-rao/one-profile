import { Component } from '@angular/core';
import { UtilityService } from '../../../../shared/services/utility.service';
import { BottomSheetService } from '../../../../shared/services/bottom-sheet.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.scss'
})
export class BottomSheetComponent {

  constructor(private utilityService: UtilityService, private bottomSheetService: BottomSheetService) {}

  options: any[] = [
    {
      title: 'Copy Link',
      url: 'https://one-profile-afw9.vercel.app/home/features',
      icon: 'content_copy',
      value: 'copy'
    }
  ]

  execute(listItem: any) {
    if(listItem.value === 'copy') {
      this.utilityService.copyToClipboard(listItem.url);
    }
    this.bottomSheetService.closeBottomSheet()
  }

}
