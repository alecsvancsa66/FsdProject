import { Component, OnInit } from '@angular/core';

import { GcloudRequestService } from '../services/gcloud-request.service';

@Component({
  selector: 'app-gcloud',
  templateUrl: './gcloud.component.html',
  styleUrls: ['./gcloud.component.scss'],
})
export class GcloudComponent implements OnInit {
  constructor(private gcloudService: GcloudRequestService) {}

  ngOnInit(): void {
    this.gcloudService.getFromCloud().subscribe((rez) => {
      console.log(rez);
    });
  }
}
