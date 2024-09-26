import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBienDispoComponent } from './liste-bien-dispo.component';

describe('ListeBienDispoComponent', () => {
  let component: ListeBienDispoComponent;
  let fixture: ComponentFixture<ListeBienDispoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeBienDispoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBienDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
