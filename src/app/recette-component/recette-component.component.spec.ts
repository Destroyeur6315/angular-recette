import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteComponentComponent } from './recette-component.component';

describe('RecetteComponentComponent', () => {
  let component: RecetteComponentComponent;
  let fixture: ComponentFixture<RecetteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
