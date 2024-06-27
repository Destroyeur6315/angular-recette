import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeIngredientComponentComponent } from './liste-ingredient-component.component';

describe('ListeIngredientComponentComponent', () => {
  let component: ListeIngredientComponentComponent;
  let fixture: ComponentFixture<ListeIngredientComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeIngredientComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeIngredientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
