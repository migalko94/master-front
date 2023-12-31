import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMenuComponent } from './public-menu.component';

describe('PublicMenuComponent', () => {
  let component: PublicMenuComponent;
  let fixture: ComponentFixture<PublicMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicMenuComponent]
    });
    fixture = TestBed.createComponent(PublicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
