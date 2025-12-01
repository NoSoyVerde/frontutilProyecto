import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGarcia } from '../../../model/garcia/garcia';
import { TrimPipe } from "../../../pipe/trim-pipe";
import { DatetimePipe } from "../../../pipe/datetime-pipe";

@Component({
  selector: 'app-Garciaunrouted-user-view2',
  imports: [TrimPipe, RouterLink, DatetimePipe],
  templateUrl: './Garciaunrouted-user-view2.html',
  styleUrl: './Garciaunrouted-user-view2.css',
})
export class UnroutedUserView2Garcia implements OnInit {
  @Input() oGarcia: IGarcia | null = null;

  iconClass: string = 'bi bi-newspaper';

  ngOnInit(): void {
    const icons: string[] = [
      'bi bi-newspaper',
      'bi bi-eye',
      'bi bi-journal-text',
      'bi bi-card-text',
      'bi bi-file-earmark-text',
      'bi bi-book',
    ];
    this.iconClass = icons[Math.floor(Math.random() * icons.length)];
  }

}
