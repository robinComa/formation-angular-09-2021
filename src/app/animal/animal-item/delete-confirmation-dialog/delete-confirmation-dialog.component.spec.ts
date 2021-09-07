import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialSharedModule } from 'src/app/material-shared/material-shared.module';

import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog.component';

describe('DeleteConfirmationDialogComponent', () => {
  let component: DeleteConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialSharedModule,
        TranslateModule.forRoot()
      ],
      declarations: [ DeleteConfirmationDialogComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: { name: 'Bill'}
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
