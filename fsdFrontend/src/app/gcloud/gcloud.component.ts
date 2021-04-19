import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { GcloudRequestService } from '../services/gcloud-request.service';

@Component({
  selector: 'app-gcloud',
  templateUrl: './gcloud.component.html',
  styleUrls: ['./gcloud.component.scss'],
})
export class GcloudComponent implements OnInit {
  posts: any;

  title = new FormControl(null, [Validators.required]);
  description = new FormControl(null, [Validators.required]);

  signinForm = new FormGroup({
    title: this.title,
    description: this.description,
  });

  constructor(private gcloudService: GcloudRequestService) {}

  ngOnInit(): void {
    this.gcloudService.getPosts().subscribe((rez) => {
      console.log(rez);
      this.posts = rez;
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const uid: string = '11';
      const post = { uid, ...this.signinForm.getRawValue() };
      console.log(post);

      this.gcloudService
        .savePost(post)
        .subscribe((result) => console.log(result));
    } else {
      this.signinForm.markAsTouched();
    }
    this.signinForm.reset();
  }
}
