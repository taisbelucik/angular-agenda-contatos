import { Injectable } from '@angular/core';
import { Cadastros } from '../interfaces/cadastros.interface';

@Injectable({
  providedIn: 'root'
})
export class CadastroContatosService {
  private usersKey = 'users';

  constructor() { }

   // createUser Cria um novo usuário
   //Este método permite criar um novo usuário. Ele recebe um objeto user como argumento e adiciona esse usuário à lista existente de usuários recuperada usando o método getUsers(). Em seguida, ele chama o método saveUsers() para salvar a lista atualizada no Local Storage.
   createUser(user: any): void {
    const users = this.getUsers();
    users.push(user);
    this.saveUsers(users);
  }

  // getUsers Obtém todos os usuários cadastrados
  //Este método recupera todos os usuários cadastrados no Local Storage. Ele lê os dados da Local Storage usando a chave usersKey, que foi definida anteriormente, e retorna os dados convertidos de JSON para um array. Se não houver dados, ele retorna um array vazio.
  getUsers(): any[] {
    const usersJson = localStorage.getItem(this.usersKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  // UpdateUser Atualiza um usuário existente
  //Este método permite atualizar um usuário existente. Ele recebe um objeto updatedUser como argumento e encontra o índice do usuário correspondente na lista de usuários usando a propriedade id. Se encontrar o usuário, substitui o usuário antigo pelo novo no array e chama o método saveUsers() para salvar a lista atualizada no Local Storage.
  updateUser(updatedUser: any): void {
    const users = this.getUsers();
    const index = users.findIndex((user) => user.id === updatedUser.id);

    if (index !== -1) {
      users[index] = updatedUser;
      this.saveUsers(users);
    }
  }

  // Exclui um usuário
  //Este método permite excluir um usuário. Ele recebe o userId do usuário que deve ser excluído. O método utiliza o método filter() para criar uma nova lista de usuários que exclui o usuário com o userId especificado. Em seguida, ele chama o método saveUsers() para salvar a lista atualizada no Local Storage.
  deleteUser(userId: number): void {
    const users = this.getUsers();
    const updatedUsers = users.filter((user) => user.id !== userId);
    this.saveUsers(updatedUsers);
  }

  // Salva a lista de usuários no Local Storage
  //Este método é privado, o que significa que só pode ser acessado dentro da classe UserService. Ele recebe uma lista de usuários e a salva no Local Storage após convertê-la em uma string JSON usando JSON.stringify(). O nome da chave usada para salvar os dados no Local Storage é usersKey.
  private saveUsers(users: Cadastros[]): void {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }
}

