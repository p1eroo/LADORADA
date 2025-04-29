import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPagoComponent } from './shop-pago.component';

describe('ShopPagoComponent', () => {
  let component: ShopPagoComponent;
  let fixture: ComponentFixture<ShopPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
