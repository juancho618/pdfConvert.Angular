import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndUploadComponent } from './dnd-upload.component';

describe('DndUploadComponent', () => {
  let component: DndUploadComponent;
  let fixture: ComponentFixture<DndUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
