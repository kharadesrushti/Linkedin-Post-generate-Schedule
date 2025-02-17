import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './home.component.html'
})
export class home {
    isSidebarCollapsed = false;

    toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }

    model = [
        { label: 'Dashboard', icon: 'assets/images/dashboard.svg', routerLink: ['/home'] },
        { label: 'Feed', icon: 'assets/images/feed.svg', routerLink: ['/homelayout/feed'] },
        { label: 'Inspiration', icon: 'assets/images/inspiration.svg', routerLink: ['homelayout/feed'] },
        { label: 'Schedule', icon: 'assets/images/schedule.svg', routerLink: ['/homelayout/schedule'] },
        { label: 'Integration', icon: 'assets/images/integration.svg', routerLink: ['/homelayout/integration'] },
        { label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: ['/uikit/input'] },
        { label: 'Usage & Payments', icon: 'assets/images/usage.svg', routerLink: ['/homelayout/usage'] },
        { label: 'Settings', icon: 'pi pi-cog', routerLink: ['/uikit/input'] },
        { separator: true },
        { label: 'Feedback', icon: 'assets/images/feedback.svg', routerLink: ['/uikit/profile'] },
        { label: 'Help', icon: 'assets/images/help.svg', routerLink: ['/uikit/profile'] },
        { label: 'Logout', icon: 'assets/images/logout.svg', routerLink: ['/logout'] }
    ];

    panels = [
        { title: 'Index', count: '672', description: 'Total posts in Inbox' },
        { title: 'Draft', count: '63', description: 'Total posts in Draft' },
        { title: 'Review', count: '7', description: 'Total posts in Review' },
        { title: 'Posted', count: '982', description: 'Total posts posted' },
        { title: 'Browsed', count: '3.5K', description: 'Total posts browsed' }
    ];

    panelcol = [
        { title: 'Posted on LinkedIn', count: '57', description: '32% more than last week' },
        { title: 'Scheduled Posts', count: '12', description: '32% more than last week' }
    ];
    panelquestion = [
        {
            questions: [
                { question: 'Did you know that red pandas were given the name...', date: '24 Feb 2025, Monday 6 PM' },
                { question: 'Did you know that red pandas were given the name...', date: '24 Feb 2025, Monday 6 PM' },
                { question: 'Did you know that red pandas were given the name...', date: '24 Feb 2025, Monday 6 PM' }
            ]
        },
        {
            questions: [
                { question: 'Did you know that red pandas were given the name...', date: '24 Feb 2025, Monday 6 PM' },
                { question: 'Did you know that red pandas were given the name...', date: '24 Feb 2025, Monday 6 PM' },
                { question: 'Did you know that red pandas were given the name...', date: '24 Feb 2025, Monday 6 PM' }
            ]
        }
    ];

    panelusage = [
        { title: 'Current Credit Usage', count: '$0.53', description: 'Total usage since 1st Feb 2024' },
        { title: 'Estimated Credit Usage', count: '$4.6', description: 'Estimated usage since for feb 24 month' },
        { title: 'Credit Available', count: '$9.3K', description: 'Total Credit available' }
    ];
}
