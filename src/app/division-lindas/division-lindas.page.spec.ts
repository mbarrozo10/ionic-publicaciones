import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisionLindasPage } from './division-lindas.page';

describe('DivisionLindasPage', () => {
  let component: DivisionLindasPage;
  let fixture: ComponentFixture<DivisionLindasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DivisionLindasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
