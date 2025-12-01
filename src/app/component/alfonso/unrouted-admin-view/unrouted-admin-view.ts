import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { IAlfonsoRespuesta } from '../../../model/alfonso-respuesta';

@Component({
  selector: 'app-alfonso-unrouted-admin-view',
  imports: [NgClass],
  templateUrl: './unrouted-admin-view.html',
  styleUrl: './unrouted-admin-view.css',
})
export class UnroutedAlfonsoAdminView {
  @Input() oRespuesta: IAlfonsoRespuesta | null = null;
}
