import {AbstractControl} from '@angular/forms'
export class PasswordValidation {
    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('Password').value;
        let confirmPassword = AC.get('ConfirmPassword').value;
        if(password !== confirmPassword){
            console.log('false');
            AC.get('ConfirmPassword').setErrors({MatchPassword: true});
        } else {
            console.log('true');
            return null;
        }
    }
}