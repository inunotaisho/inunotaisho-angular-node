import { Observable } from 'rxjs';
import { AuthService } from './../authservice/authentication.service';
import { HttpClient } from '@angular/common/http';
import { OnInit, Injectable, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { FileUploader, FileSelectDirective, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload/ng2-file-upload';
import { AppSettings } from './../../common/config';
import { contentHeaders } from '../../common/headers';

@Injectable({
  providedIn: 'root'
})
export class EditorUploadService implements OnInit {

  private hasBaseDropZoneOver: boolean = false;
  private uploader: FileUploader;
  private title: string;
  private uploaderType: object;

  constructor(
    private authService: AuthService,
    private zone: NgZone,
    private http: HttpClient
  ) {
    this.responses = [];
    this.title = '';
  }

  @Input() responses: Array<any>;


  ngOnInit(): void {
    // Create the generic file uploader, wire it to upload to your Amazon S3 account

    const fileUploaderOptions: FileUploaderOptions = {
      url: ``,
      disableMultipart: true

    }

    this.uploader = new FileUploader(
      fileUploaderOptions
    );
  }

  getImage(imageId: number): Observable<any> {
    return this.http
      .get(
        '',
        { headers: this.authService.getAuthHeader(contentHeaders) },
      );
  }

  deleteImage(imageId: number): Observable<any> {
    return this.http
      .delete(
        '',
        { headers: this.authService.getAuthHeader(contentHeaders) },
      );
  }

  uploadImage(file: File, imageId: number): Observable<any> {
    const data = new FormData();
    data.append('image', file);

    return this.http
      .post(
        '',
        data,
        { headers: this.authService.getAuthHeader(null) },
      );
  }

}
