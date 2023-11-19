import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HacerpedidoPage } from './hacerpedido.page';

describe('HacerpedidoPage', () => {
  let component: HacerpedidoPage;
  let fixture: ComponentFixture<HacerpedidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HacerpedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
