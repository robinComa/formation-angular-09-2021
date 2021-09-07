import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Animal } from '../../shared-animal/animal';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.scss']
})
export class DeleteConfirmationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public animal: Animal) { }

  ngOnInit(): void {
  }

}
