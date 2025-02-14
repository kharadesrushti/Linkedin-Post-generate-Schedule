import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<!-- Sidebar Toggle Button (Mobile View) -->
<button 
  class="md:hidden fixed top-4 left-4 bg-gray-800 text-white p-2 rounded z-50" 
  (click)="toggleSidebar()"
>
  ☰
</button>

<!-- Overlay when sidebar is open -->
<div 
  *ngIf="isSidebarCollapsed" 
  class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
  (click)="toggleSidebar()"
></div>

<div class="flex h-screen">
  <!-- Sidebar -->
<div 
  class="bg-white w-[220px] p-2 h-full fixed top-0 left-0 z-50 flex flex-col justify-between transition-transform transform md:translate-x-0"
  [ngClass]="{'-translate-x-full': !isSidebarCollapsed, 'translate-x-0': isSidebarCollapsed}"
>
  <div class="bg-white p-3 rounded-lg shadow-lg h-full flex flex-col">
    <!-- Header -->
    <header class="flex items-center justify-between p-2">
      <a class="flex items-center" href="#">
        <img src="assets/images/unicornicon.svg" alt="Unicorn Logo" class="w-[25px] h-[25px]" />
        <span class="text-[#1A1A1A] text-[14px] font-bold ml-2">UI Unicorn</span>
      </a>
      <!-- Close button (Mobile View) -->
      <button class="md:hidden text-gray-600" (click)="toggleSidebar()">✖</button>
    </header>

    <!-- Menu Items -->
    <ul class="layout-menu space-y-2 flex-1">
      <ng-container *ngFor="let item of model">
        <li 
          *ngIf="!item.separator" 
          class="flex items-center p-2 cursor-pointer hover:bg-gray-100"
          (click)="toggleSidebar()"
        >
          <ng-container *ngIf="item.icon?.endsWith('.svg'); else primeIcon">
            <img [src]="item.icon" alt="{{ item.label }}" class="w-5 h-5 mr-2">
          </ng-container>
          <ng-template #primeIcon>
            <i [class]="item.icon" class="mr-2"></i>
          </ng-template>
          {{ item.label }}
        </li>
        <li *ngIf="item.separator" class="border-t my-2"></li>
      </ng-container>
    </ul>
  </div>
</div>


  <!-- Main Content -->
  <div class="flex flex-col w-full p-6 transition-all"
    [ngClass]="{'md:ml-[220px]': !isSidebarCollapsed, 'ml-0': isSidebarCollapsed}"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div *ngFor="let panel of panels" class="p-2">
        <div class="card p-3 shadow-md">
          <div class="text-lg md:text-xl mb-2">{{ panel.title }}</div>
          <label class="block text-2xl md:text-3xl">{{ panel.count }}</label>
          <p class="m-0 text-sm">{{ panel.description }}</p>
        </div>
      </div>
    </div>

    <!-- Bird Eye View -->
    <div class="mt-6 flex justify-between">
      <span class="font-bold">Bird Eye view</span>

      <div class="flex items-center">
        <button class="mx-2 text-xl p-2 rounded-md focus:outline-none">&lt;</button>
        <span class="mx-2 text-lg">June</span>
        <span class="mx-2 text-xl">2022</span>
        <button class="mx-2 text-xl p-2 rounded-md focus:outline-none">&gt;</button>
      </div>
    </div>

    <!-- Two Column Panels -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
      <div *ngFor="let panel of panelcol" class="p-2">
        <div class="card p-3 shadow-md">
          <div class="font-semibold text-lg md:text-xl mb-2">{{ panel.title }}</div>
          <label class="block text-2xl md:text-3xl">{{ panel.count }}</label>
          <p class="m-0 text-sm">{{ panel.description }}</p>
        </div>
      </div>
    </div>

    <!-- Question Panels -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      <div *ngFor="let panel of panelquestion" class="p-2">
        <div class="card p-3 shadow-md">
          <div *ngFor="let item of panel.questions">
            <div class="font-semibold text-base">{{ item.question }}</div>
            <div class="flex justify-between items-center">
              <label class="block text-sm">{{ item.date }}</label>
              <i class="pi pi-external-link"></i>
            </div>
            <hr class="mt-6 border-t border-gray-300" />
          </div>
        </div>
      </div>
    </div>

    <!-- Usage Section -->
    <div class="mt-6">
      <span class="font-bold">Usage</span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
      <div *ngFor="let panel of panelusage" class="p-2">
        <div class="card p-3 shadow-md">
          <div class="text-lg md:text-xl mb-2">{{ panel.title }}</div>
          <label class="block text-2xl md:text-3xl">{{ panel.count }}</label>
          <p class="m-0 text-sm">{{ panel.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>



 
  `
})
export class home {
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  model = [
    { label: 'Dashboard', icon: 'assets/images/dashboard.svg', routerLink: ['/uikit/formlayout'] },
    { label: 'Feed', icon: 'assets/images/feed.svg', routerLink: ['/uikit/input'] },
    { label: 'Inspiration', icon: 'assets/images/inspiration.svg', routerLink: ['/uikit/input'] },
    { label: 'Schedule', icon: 'assets/images/schedule.svg', routerLink: ['/uikit/input'] },
    { label: 'Integration', icon: 'assets/images/integration.svg', routerLink: ['/uikit/input'] },
    { label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: ['/uikit/input'] },
    { label: 'Usage & Payments', icon: 'assets/images/usage.svg', routerLink: ['/uikit/input'] },
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
    { title: 'Browsed', count: '3.5K', description: 'Total posts browsed' },
  ];

  panelcol=[
    { title: 'Posted on LinkedIn', count: '57', description: '32% more than last week'},
    { title: 'Scheduled Posts', count: '12', description: '32% more than last week'}
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
  
  panelusage=[
    {title: 'Current Credit Usage', count: '$0.53', description: 'Total usage since 1st Feb 2024'},
    {title: 'Estimated Credit Usage', count: '$4.6', description: 'Estimated usage since for feb 24 month'},
    {title: 'Credit Available', count: '$9.3K', description: 'Total Credit available'}
  ]
}
