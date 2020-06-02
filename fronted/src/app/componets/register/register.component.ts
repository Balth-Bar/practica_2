import { Component, OnInit } from '@angular/core';
import{UserService} from '../../services/user.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  //providers: [UserService]
})
export class RegisterComponent implements OnInit {

  constructor(public userservice : UserService) { }

  ngOnInit(): void {
  }


  addUser(form: NgForm){
    console.log(form.value);

  }

}
