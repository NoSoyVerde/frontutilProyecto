import { Component, Input } from '@angular/core';
import { IGarcia } from '../../../model/garcia/garcia';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-Garciaunrouted-admin-view',
  imports: [RouterLink],
  templateUrl: './Garciaunrouted-admin-view.html',
  styleUrl: './Garciaunrouted-admin-view.css',
})
export class UnroutedAdminViewGarcia {
  @Input() oGarcia: IGarcia | null = null;
}
