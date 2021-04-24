import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    // @ts-ignore
    signInForm: FormGroup;
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) {}
    ngOnInit(): void {
        // Create the form
        this.signInForm = this._formBuilder.group({
            username: ['admin'],
            password: ['Password123!'],
            rememberMe: [''],
        });
    }
    signIn(): void {
        // Disable the form
        this.signInForm.disable();

        // Get the credentials
        const credentials = this.signInForm.value;
        const creds = {
            username: this.signInForm.value.username,
            password: this.signInForm.value.password,
        };
        // Sign in
        this._authService.login(creds).subscribe((x) => {
                        let redirectURL = '';
                redirectURL =
                    x === 'admin'
                        ? '/employee'
                        : (redirectURL = x === 'employee' ? '/' : '/employee');
                debugger;
                // routing file and we don't have to touch here.


                        // Navigate to the redirect url
                this._router.navigateByUrl(redirectURL);
            },
            response => {
                const a = response;
                // debugger;

                // Re-enable the form
                this.signInForm.enable();
            }
        );
    }
}
