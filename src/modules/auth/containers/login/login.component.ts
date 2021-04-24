import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../../services/auth.service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
    providers: [AuthService],
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
            email: this.signInForm.value.username,
            password: this.signInForm.value.password,
        };

        this._authService.signIn(creds).subscribe(response => {
            this._authService.setAuthToken(response.token);
            this._router.navigateByUrl('/');
        });
    }
}
