import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntojitosComponent } from './antojitos.component';

describe('AntojitosComponent', () => {
  let component: AntojitosComponent;
  let fixture: ComponentFixture<AntojitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntojitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntojitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
