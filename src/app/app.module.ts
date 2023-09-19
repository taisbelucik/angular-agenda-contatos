import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ListarCadastrosComponent } from './listar-cadastros/listar-cadastro.component';
import { CadastroContatosService } from './services/cadastro-contatos.service';

@NgModule({
  declarations: [AppComponent, FormCadastroComponent, ListarCadastrosComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CadastroContatosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
