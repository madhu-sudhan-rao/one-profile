import { Component, OnInit } from '@angular/core';
import { BottomSheetService } from '../../../../shared/services/bottom-sheet.service';
import { UtilityService } from '../../../../shared/services/utility.service';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { User, UserDetails } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  user: User = {
    id: '9621f574-8277-4596-9c65-4bf00a75af3b',
    realName: '',
    userName: '',
    details: []
  };
  noDetailsView: boolean = false;

  constructor(private utilityService: UtilityService, private bottomSheetService: BottomSheetService, private router: Router){}

  ngOnInit(): void {
    const userDetailsString = localStorage.getItem('user');
    if (userDetailsString) {
      try {
        const userDetails = JSON.parse(userDetailsString) as UserDetails;
        this.user.realName = userDetails.fullName;
        this.user.userName = userDetails.username
        this.user.details = [
          { icon: 'pi pi-envelope', value: userDetails.email },
          { icon: 'pi pi-phone', value: userDetails.mobile },
          { icon: 'pi pi-instagram', value: 'Instagram', url: userDetails.instagram },
          { icon: 'pi pi-github', value: 'Github', url: userDetails.github },
          { icon: 'pi pi-linkedin', value: 'Linkedin', url: userDetails.linkedin },
          { icon: 'pi pi-twitter', value: 'Twitter', url: userDetails.twitter },
          { icon: 'snapchat', value: 'Snapchat', url: userDetails.snapchat }
        ];
        this.noDetailsView = false;
      } catch (error) {
        console.error('Failed to parse user details: ', error);
      }
    } else {
      console.error('User details not found in localStorage');
      this.noDetailsView = true;

    }
  }

  copyURL(url: string) {
    this.utilityService.copyToClipboard(url);
  }

  openShareOptions() {
    this.bottomSheetService.openBottomSheet(BottomSheetComponent)    
  }

  addDetails() {
    this.router.navigate(['/edit-profile']);
  }
}
