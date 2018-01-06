import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';
import { USER } from './actions';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.dispatch({ type: USER, body: new User().setName('Suellen', 'Mariana')});
  }

  public changeName() {
    this.ngRedux.dispatch({ type: USER, body: new User().setName('Charleston', 'Campos')});
  }
}
