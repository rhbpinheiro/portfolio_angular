import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IProjects } from './../../../interfaces/iprojects.interface';
import { Component, Inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-dialog-project',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-project.component.html',
  styleUrl: './dialog-project.component.scss'
})
export class DialogProjectComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
  ) { }
  public getData = signal<IProjects | null>(null)
  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
    return this._dialogRef.close();
  }
}