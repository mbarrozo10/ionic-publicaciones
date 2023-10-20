import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisionFeasPage } from './division-feas.page';

describe('DivisionFeasPage', () => {
  let component: DivisionFeasPage;
  let fixture: ComponentFixture<DivisionFeasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DivisionFeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
