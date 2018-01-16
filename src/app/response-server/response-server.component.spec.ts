import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseServerComponent } from './response-server.component';

describe('ResponseServerComponent', () => {
  let component: ResponseServerComponent;
  let fixture: ComponentFixture<ResponseServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
