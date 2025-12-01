import { Component, Input } from '@angular/core';
import { IGarcia } from '../../../model/garcia/garcia';
import { DatetimePipe } from "../../../pipe/datetime-pipe";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-Garciaunrouted-user-view',
  imports: [DatetimePipe, RouterLink],
  templateUrl: './Garciaunrouted-user-view.html',
  styleUrl: './Garciaunrouted-user-view.css',
})
export class UnroutedUserViewGarcia {
  @Input() oGarcia: IGarcia | null = null;

}
