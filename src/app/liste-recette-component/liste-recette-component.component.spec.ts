import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRecetteComponentComponent } from './liste-recette-component.component';

describe('ListeRecetteComponentComponent', () => {
  let component: ListeRecetteComponentComponent;
  let fixture: ComponentFixture<ListeRecetteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeRecetteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeRecetteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
