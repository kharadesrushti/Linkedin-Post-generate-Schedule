import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';


@Component({
    selector: 'profile',
    standalone: true,
    imports: [CommonModule,RouterModule, AvatarGroupModule,AvatarModule,SelectModule,ButtonModule, FormsModule,InputTextModule,FluidModule, TextareaModule,FileUploadModule],
    templateUrl:'./profile.component.html' ,
    styleUrls: ['./profile.component.css'],
    providers: [MessageService]
})
export class Profile {
    panelcol = [
        { title: 'Emerson Carder',description:'Product Designer, Figma' },
    ];
    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }
   
    
}
