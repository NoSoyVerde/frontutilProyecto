import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IAlfonsoRespuesta } from '../../../model/alfonso-respuesta';
import { DatetimePipe } from "../../../pipe/datetime-pipe";

@Component({
  selector: 'app-alfonso-user-card',
  imports: [DatetimePipe, RouterLink, NgClass],
  templateUrl: './unrouted-user-card.html',
  styleUrl: './unrouted-user-card.css',
})
export class UnroutedAlfonsoUserCard {
  @Input() respuesta!: IAlfonsoRespuesta;
}
