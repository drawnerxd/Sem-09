import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaComponente } from './persona-componente';

describe('PersonaComponente', () => {
  let component: PersonaComponente;
  let fixture: ComponentFixture<PersonaComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
