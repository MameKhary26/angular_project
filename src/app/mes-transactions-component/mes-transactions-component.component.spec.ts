import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesTransactionsComponentComponent } from './mes-transactions-component.component';

describe('MesTransactionsComponentComponent', () => {
  let component: MesTransactionsComponentComponent;
  let fixture: ComponentFixture<MesTransactionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesTransactionsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesTransactionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
