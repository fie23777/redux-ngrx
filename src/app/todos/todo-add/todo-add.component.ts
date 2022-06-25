import { Component, OnInit } from '@angular/core';
import { FormControl, RequiredValidator, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppEstado } from 'src/app/app-estado';
import { crear } from '../todo.acao';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl



  constructor(private estado: Store<AppEstado>) {
    this.txtInput = new FormControl('',Validators.required)
  }

  ngOnInit(): void {
  }
  adicionar(){
    if(this.txtInput.invalid)return
    this.estado.dispatch(crear({texto: this.txtInput.value}))
    this.txtInput.reset();
  }

}
