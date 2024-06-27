import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecetteComponentComponent } from './form-recette-component.component';

describe('FormRecetteComponentComponent', () => {
  let component: FormRecetteComponentComponent;
  let fixture: ComponentFixture<FormRecetteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRecetteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRecetteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
