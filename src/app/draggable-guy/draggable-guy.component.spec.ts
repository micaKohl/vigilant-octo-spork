import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableGuyComponent } from './draggable-guy.component';

describe('DraggableGuyComponent', () => {
  let component: DraggableGuyComponent;
  let fixture: ComponentFixture<DraggableGuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableGuyComponent]
    });
    fixture = TestBed.createComponent(DraggableGuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
