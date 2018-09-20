import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../../Model/User';
import { PasswordValidation } from '../../app/share/PasswordValidation';
import { Gender } from '../../Model/Gender';
import { AppService } from '../../Service/AppService';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})

export class FavoritePage {
  public group: FormGroup;
  public userModel: User;
  public values: Gender[] = [{ id: 0, text: 'Unknow' }, { id: 1, text: 'Male' }, { id: 2, text: 'Female' }];
  public selectGenderValue: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private appservice: AppService) {
    this.initForm();
    this.updateForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
  }

  initForm() {
    this.group = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      Gender: new FormControl(''),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, {
        validators: PasswordValidation.MatchPassword
      });
  }

  updateForm() {
    this.group.valueChanges.filter(data => this.group.valid)
      .subscribe((data) => {
        this.userModel = new User(<User>{
          email: data.Email,
          lastname: data.LastName,
          firstname: data.FirstName,
          gender: this.selectGenderValue,
          password: data.Password,
          confirmpassword: data.ConfirmPassword,
          image: ''
        });
      });
  }

  onChange(id: number) {
    this.selectGenderValue = id;
  }

  createAccount() {
    this.appservice.registerAccount(this.userModel).subscribe(data => {
      console.log(data);
    });
  }
}
