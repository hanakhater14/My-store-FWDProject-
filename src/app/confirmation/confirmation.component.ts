import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { UserserviceService } from '../services/userservice.service';
import { user } from 'src/models/user';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  user: user;
  constructor(private userService: UserserviceService) {
    this.user = {
      fullName: "",
      totalCartPrice: 0
    }
  }


  ngOnInit(): void {
    this.user = this.userService.getUserData();
    console.log(this.user);
  }

}
