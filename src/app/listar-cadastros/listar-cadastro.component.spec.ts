import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCadastrosComponent } from './listar-cadastro.component';

describe('ListarCadastroComponent', () => {
  let component: ListarCadastrosComponent;
  let fixture: ComponentFixture<ListarCadastrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCadastrosComponent],
    });
    fixture = TestBed.createComponent(ListarCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
