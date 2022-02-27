import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm!: NgForm;
  genders = ['male', 'female'];
  defaultQuestion = 'pet';
  title = 'form-app';
  user = {
    username: '',
    email: '',
    gender: '',
    secret: '',
  };
  submitted = false;
  // onSubmit(form: NgForm) {
  //   console.log(form);

  // }

  onSuggestUserName() {
    const suggestUsername = 'ahmed';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestUsername,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   gender: 'male',
    // });
    this.signupForm.form.patchValue({
      userData: { username: suggestUsername },
    });
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.gender;
    this.user.secret = this.signupForm.value.secret;

    this.signupForm.reset();
  }
}
