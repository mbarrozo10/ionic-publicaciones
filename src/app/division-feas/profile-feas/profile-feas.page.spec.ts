import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileFeasPage } from './profile-feas.page';

describe('ProfileFeasPage', () => {
  let component: ProfileFeasPage;
  let fixture: ComponentFixture<ProfileFeasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileFeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
