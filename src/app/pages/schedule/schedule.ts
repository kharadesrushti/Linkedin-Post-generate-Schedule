import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'schedule',
    standalone: true,
    imports: [CommonModule,RouterModule],
    templateUrl:'./schedule.component.html' 
})
export class Schedule {
    panelcol = [
        { title: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...' },
    ];
}
