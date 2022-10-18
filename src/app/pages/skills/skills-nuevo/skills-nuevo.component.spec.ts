import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsNuevoComponent } from './skills-nuevo.component';

describe('SkillsNuevoComponent', () => {
  let component: SkillsNuevoComponent;
  let fixture: ComponentFixture<SkillsNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsNuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
