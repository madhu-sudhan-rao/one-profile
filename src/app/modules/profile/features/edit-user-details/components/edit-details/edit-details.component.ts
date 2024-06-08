import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../../../../../../core/enums/gender.enum';
import { UtilityService } from '../../../../../../shared/services/utility.service';
import { UserDetails } from '../../../../models/user.model';
import { SnackbarService } from '../../../../../../shared/services/snackbar.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrl: './edit-details.component.scss',
})
export class EditDetailsComponent implements OnInit {
  detailsForm: FormGroup;
  genders: any[] = [
    { value: Gender.MALE, viewValue: Gender.MALE, disable: false },
    { value: Gender.FEMALE, viewValue: Gender.FEMALE, disable: false },
    { value: Gender.OTHER, viewValue: Gender.OTHER, disable: false },
  ];

  userDetailsDto: UserDetails;

  constructor(private fb: FormBuilder, private utilityService: UtilityService, private snackBarService: SnackbarService) {
    this.detailsForm = this.fb.group({
      fullName: [null, [Validators.minLength(3)]],
      username: [null, [Validators.pattern('^[a-zA-Z0-9_-]{3,15}$')]],
      email: [null, [Validators.email]],
      mobile: [null, [Validators.pattern('^[0-9]{10}$')]],
      gender: [null],
      birthday: [null],
      instagram: [null],
      twitter: [null],
      snapchat: [null],
      linkedin: [null],
      github: [null],
    });

    this.userDetailsDto = this.initEmptyUserDetails()
  }

  initEmptyUserDetails(): UserDetails {
    return {
      fullName: '',
      username: '',
      email: '',
      mobile: '',
      gender: '',
      birthday: '',
      instagram: '',
      twitter: '',
      snapchat: '',
      linkedin: '',
      github: '',
    };
  }
  

  ngOnInit(): void {
    const userDetailsString = localStorage.getItem('user');
    if (userDetailsString) {
      try {
        const userDetails = JSON.parse(userDetailsString) as UserDetails;
        this.detailsForm.patchValue({
          fullName: userDetails.fullName,
          username: userDetails.username,
          email: userDetails.email,
          mobile: userDetails.mobile,
          gender: userDetails.gender,
          birthday: userDetails.birthday,
          instagram: userDetails.instagram,
          twitter: userDetails.twitter,
          snapchat: userDetails.snapchat,
          linkedin: userDetails.linkedin,
          github: userDetails.github,
        });
      } catch (error) {
        console.error('Failed to parse user details: ', error);
      }
    } else {
      console.error('User details not found in localStorage');
    }
  }
  
  saveChanges() {
    this.updateUserDetails()
    localStorage.setItem('user', JSON.stringify(this.userDetailsDto));
    this.snackBarService.openSnackBar("Details Updated!")
  }

  updateUserDetails(): void {
    this.userDetailsDto.fullName = this.detailsForm.get('fullName')?.value ?? '';
    this.userDetailsDto.username = this.detailsForm.get('username')?.value ?? '';
    this.userDetailsDto.email = this.detailsForm.get('email')?.value ?? '';
    this.userDetailsDto.mobile = this.detailsForm.get('mobile')?.value ?? '';
    this.userDetailsDto.gender = this.detailsForm.get('gender')?.value ?? '';
    this.userDetailsDto.birthday = this.detailsForm.get('birthday')?.value ?? '';
    this.userDetailsDto.instagram = this.detailsForm.get('instagram')?.value ?? '';
    this.userDetailsDto.twitter = this.detailsForm.get('twitter')?.value ?? '';
    this.userDetailsDto.snapchat = this.detailsForm.get('snapchat')?.value ?? '';
    this.userDetailsDto.linkedin = this.detailsForm.get('linkedin')?.value ?? '';
    this.userDetailsDto.github = this.detailsForm.get('github')?.value ?? '';
  }
  
  

  pasteURL(controlName: string) {
    this.utilityService.pasteText(this.detailsForm, controlName);
    // console.log('controlName: ', controlName);
    // const pastedText = this.utilityService.pasteText(this.detailsForm, controlName);
    // console.log(pastedText);

    // const control = this.detailsForm.get(controlName);
    // if (control) {
    //   control.setValue(pastedText);
    //   console.log('control: ', control);
    // }
  }
}
