import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionListComponent } from './champion-list.component';

describe('ChampionListComponent', () => {
  let component: ChampionListComponent;
  let fixture: ComponentFixture<ChampionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionListComponent]
    });
    fixture = TestBed.createComponent(ChampionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
