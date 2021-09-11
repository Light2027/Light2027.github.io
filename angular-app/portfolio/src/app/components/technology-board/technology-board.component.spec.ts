import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyBoardComponent } from './technology-board.component';

describe('TechnologyBoardComponent', () => {
  let component: TechnologyBoardComponent;
  let fixture: ComponentFixture<TechnologyBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
