import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAntojitoComponent } from './actualizar-antojito.component';

describe('ActualizarAntojitoComponent', () => {
  let component: ActualizarAntojitoComponent;
  let fixture: ComponentFixture<ActualizarAntojitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarAntojitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarAntojitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
