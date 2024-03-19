import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDataComponent } from './block-data.component';

describe('BlockDataComponent', () => {
  let component: BlockDataComponent;
  let fixture: ComponentFixture<BlockDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
