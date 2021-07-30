import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVaultComponent } from './my-vault.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('MyVaultComponent', () => {
  let component: MyVaultComponent;
  let fixture: ComponentFixture<MyVaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVaultComponent ],
      schemas: [NO_ERRORS_SCHEMA]
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
