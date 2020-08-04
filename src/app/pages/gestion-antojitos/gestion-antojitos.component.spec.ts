import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAntojitosComponent } from './gestion-antojitos.component';

describe('GestionAntojitosComponent', () => {
  let component: GestionAntojitosComponent;
  let fixture: ComponentFixture<GestionAntojitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAntojitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAntojitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
