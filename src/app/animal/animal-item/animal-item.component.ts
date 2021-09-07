import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Animal } from '../shared-animal/animal';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss']
})
export class AnimalItemComponent {

  @Input()
  animal: Animal;

  @Output()
  remove = new EventEmitter<Animal>();

  constructor(private dialog: MatDialog) { }

  delete(): void {
    const dialog = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: this.animal
    });
    dialog.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this.remove.emit(this.animal);
      }
    });
  }

}
