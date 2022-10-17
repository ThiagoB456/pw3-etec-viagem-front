import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { HomeComponent } from './home/home.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component : ListagemViagemComponent},
  {path:'cadastro-viagem', component : CadastroViagemComponent},
  {path:'detalhes-viagem/:id', component : DetalhesViagemComponent},
  {path:'exclusao-viagem/:id', component : ExclusaoViagemComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
