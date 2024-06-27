import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecetteComponentComponent } from './detail-recette-component.component';

describe('DetailRecetteComponentComponent', () => {
  let component: DetailRecetteComponentComponent;
  let fixture: ComponentFixture<DetailRecetteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailRecetteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailRecetteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
