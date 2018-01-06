import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { NgRedux } from 'ng2-redux/lib/components/ng-redux';
import { IAppState } from '../../store';
import { User } from '../../models/user';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements DoCheck {
  user: User;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngDoCheck() {
    this.user = this.ngRedux.getState().user;
  }

}
