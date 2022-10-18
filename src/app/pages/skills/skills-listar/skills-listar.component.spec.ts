import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsListarComponent } from './skills-listar.component';

describe('SkillsListarComponent', () => {
  let component: SkillsListarComponent;
  let fixture: ComponentFixture<SkillsListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
