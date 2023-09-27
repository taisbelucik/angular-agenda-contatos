import { Component } from '@angular/core';
import { CadastroContatosService } from '../services/cadastro-contatos.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent {

  public formulario: FormGroup = this.form.group({
  nome: [""],
  telefone: [""],
   });

  constructor(private cadastroContatosService: CadastroContatosService, private form: FormBuilder) { }

  createUser(): void {
    const dadosForm = this.formulario.getRawValue();
    this.cadastroContatosService.createUser(dadosForm)
    }
}
