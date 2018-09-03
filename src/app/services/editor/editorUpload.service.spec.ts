import { TestBed, inject } from '@angular/core/testing';

import { EditorUploadService } from './editorUpload.service';

describe('EditorUploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorUploadService]
    });
  });

  it('should be created', inject([EditorUploadService], (service: EditorUploadService) => {
    expect(service).toBeTruthy();
  }));
});
