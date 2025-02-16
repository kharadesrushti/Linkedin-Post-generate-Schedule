import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'home-app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class HomeAppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
            },
            {
                items: [
                    { label: 'Dashboard', icon: 'assets/images/dashboard.svg', routerLink: ['/homelayout/home'] },
                    { label: 'Feed', icon: '../assets/images/feed.svg', routerLink: ['/homelayout/feed'] },
                    { label: 'Inspriration', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Schedule', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
                    { label: 'Integration', icon: '..assets/images/integration.svg', routerLink: ['/homelayout/integration'] },
                    { label: 'Profile', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Usage & Payments', icon: 'pi pi-fw pi-share-alt', routerLink: ['/homelayout/usage'] },
                    { label: 'Settings', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Feedback', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Help', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Log Out', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                ]
            }, 
        ];
    }
}