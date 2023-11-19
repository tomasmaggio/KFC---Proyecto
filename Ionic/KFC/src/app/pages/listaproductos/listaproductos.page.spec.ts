import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaproductosPage } from './listaproductos.page';

describe('ListaproductosPage', () => {
  let component: ListaproductosPage;
  let fixture: ComponentFixture<ListaproductosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
