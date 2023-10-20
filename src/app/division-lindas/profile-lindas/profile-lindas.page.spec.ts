import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileLindasPage } from './profile-lindas.page';

describe('ProfileLindasPage', () => {
  let component: ProfileLindasPage;
  let fixture: ComponentFixture<ProfileLindasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileLindasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
