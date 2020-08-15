import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockItemComponent } from './update-stock-item.component';

describe('UpdateStockItemComponent', () => {
  let component: UpdateStockItemComponent;
  let fixture: ComponentFixture<UpdateStockItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
