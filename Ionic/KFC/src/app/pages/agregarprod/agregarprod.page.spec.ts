import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarprodPage } from './agregarprod.page';

describe('AgregarprodPage', () => {
  let component: AgregarprodPage;
  let fixture: ComponentFixture<AgregarprodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarprodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
