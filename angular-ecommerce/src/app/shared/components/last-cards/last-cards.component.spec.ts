import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCardsComponent } from './last-cards.component';

describe('LastCardsComponent', () => {
  let component: LastCardsComponent;
  let fixture: ComponentFixture<LastCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastCardsComponent]
    });
    fixture = TestBed.createComponent(LastCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
