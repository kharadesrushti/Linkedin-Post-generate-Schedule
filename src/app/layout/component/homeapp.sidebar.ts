import { Component, ElementRef } from '@angular/core';
import { HomeAppMenu } from './homeapp.menu';

@Component({
    selector: 'home-app-sidebar',
    standalone: true,
    imports: [HomeAppMenu],
    template: ` <div class="layout-sidebar">
        <home-app-menu></home-app-menu>
    </div>`
})
export class HomeAppSidebar {
    constructor(public el: ElementRef) {}
}
