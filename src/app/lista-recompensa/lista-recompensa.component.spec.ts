import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecompensaComponent } from './lista-recompensa.component';

describe('ListaRecompensaComponent', () => {
  let component: ListaRecompensaComponent;
  let fixture: ComponentFixture<ListaRecompensaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaRecompensaComponent]
    });
    fixture = TestBed.createComponent(ListaRecompensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
