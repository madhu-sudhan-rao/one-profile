import { Component, Input } from '@angular/core';
import { BottomSheetService } from '../../../../shared/services/bottom-sheet.service';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-user-name-card',
  templateUrl: './user-name-card.component.html',
  styleUrl: './user-name-card.component.scss'
})
export class UserNameCardComponent {
  @Input() user: any;

  constructor(private bottomSheetService: BottomSheetService){}

  openShareOptions() {
    this.bottomSheetService.openBottomSheet(BottomSheetComponent)    
  }

}
