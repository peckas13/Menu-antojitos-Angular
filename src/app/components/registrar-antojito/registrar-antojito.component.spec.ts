import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAntojitoComponent } from './registrar-antojito.component';

describe('RegistrarAntojitoComponent', () => {
  let component: RegistrarAntojitoComponent;
  let fixture: ComponentFixture<RegistrarAntojitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAntojitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAntojitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
