import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVaultComponent } from './my-vault.component';

describe('MyVaultComponent', () => {
  let component: MyVaultComponent;
  let fixture: ComponentFixture<MyVaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
