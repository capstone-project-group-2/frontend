import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipdelComponent } from './shipdel.component';

describe('ShipdelComponent', () => {
  let component: ShipdelComponent;
  let fixture: ComponentFixture<ShipdelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipdelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
