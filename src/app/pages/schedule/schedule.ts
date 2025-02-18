import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { FluidModule } from 'primeng/fluid';
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'schedule',
    standalone: true,
    imports: [CommonModule,RouterModule,ButtonModule,TextareaModule,SelectModule,FluidModule,FormsModule,TextareaModule],
    templateUrl:'./schedule.component.html', 
    styleUrls: ['./schedule.component.css'],
})
export class Schedule {
    panelcol = [
        { title: 'Did you know that red pandas were given the name lorem lorem lorem ipsm ipsm ipsm' },
        { title: 'Did you know that red pandas were given the name lorem lorem lorem ipsm ipsm ipsm' },
        { title: 'Did you know that red pandas were given the name lorem lorem lorem ipsm ipsm ipsm' },
        { title: 'Did you know that red pandas were given the name lorem lorem lorem ipsm ipsm ipsm' },
        { title: 'Did you know that red pandas were given the name lorem lorem lorem ipsm ipsm ipsm' },
        { title: 'Did you know that red pandas were given the name lorem lorem lorem ipsm ipsm ipsm' },

    ];
    dropdownItems = [
        { name: 'Parsona 1', code: 'Option 1' },
        { name: 'Parsona 2', code: 'Option 2' },
        { name: 'Parsona 3', code: 'Option 3' }
    ];

    dropdownItem = null;
}
