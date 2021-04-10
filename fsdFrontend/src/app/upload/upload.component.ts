import { Component, OnInit } from '@angular/core';

import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  // selectedFile: File = null;
  localUrl: any;

  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);

      // this.selectedFile = <File>event.target.files[0];
      // console.log(this.selectedFile);

      this.uploadService
        .uploadFile('/eval', <File>event.target.files[0])
        .subscribe((result) => console.log(result));
    }
  }
}
