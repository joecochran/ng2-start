import { Component } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector: 'user-form',
    styles: [`
        form {
            padding: 10px;
            background: #ecf0f1;
            border-radius: 3px;
            margin-bottom: 30px;
        } 
    `],
    template: `
    <form #form="ngForm">
        {{ form.valid }}
        <div class="form-group">
            <input class="form-control" type="text" required name="name" [(ngModel)]="newUser.name" #name="ngModel">
        </div>
        <div class="form-group">
            <input class="form-control" type="text" required name="username" [(ngModel)]="newUser.username" #username="ngModel">
        </div>
        <button class="btn btn-md btn-block btn-primary" type="submit" [disabled]="form.invalid">
            Create User
        </button>
    </form>
    `
})
export class UserFormComponent {
    newUser: User = new User();
}
