import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { FuncionarioService } from '../../services/domain/funcionario.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public funcionarioService: FuncionarioService,
    public formBuilder: FormBuilder) {
      this.formGroup = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        sobrenome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.email]],
        pis: ['', [Validators.required, Validators.minLength(11)]]
      });
  }

}
