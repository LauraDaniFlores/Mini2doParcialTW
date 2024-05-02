import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcLugaresComponent } from './opc-lugares.component';

describe('OpcLugaresComponent', () => {
  let component: OpcLugaresComponent;
  let fixture: ComponentFixture<OpcLugaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcLugaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcLugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
