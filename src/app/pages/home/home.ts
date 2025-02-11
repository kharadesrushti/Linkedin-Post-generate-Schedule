import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
 <!-- Sidebar Wrapper -->
<div class="flex h-screen">
  <!-- Sidebar -->
  <div class="bg-white w-[220px] p-2 h-full fixed top-0 left-0 z-50">
    <div class="bg-white p-3 rounded-lg shadow-lg h-full">
      <header class="flex items-center justify-between p-2">
        <a class="flex items-center" href="#">
          <img src="assets/images/unicornicon.svg" alt="Unicorn Logo" class="w-[25.74px] h-[25.74px]" />
          <span class="text-[#1A1A1A] text-[14.45px] font-bold ml-2 whitespace-nowrap">UI Unicorn</span>
        </a>
      </header>

      <!-- Menu -->
      <ul class="layout-menu space-y-2">
        <ng-container *ngFor="let item of model">
          <li *ngIf="!item.separator" class="flex items-center p-2 cursor-pointer hover:bg-gray-100">
            <i [class]="item.icon" class="mr-2"></i> {{ item.label }}
          </li>
          <li *ngIf="item.separator" class="border-t my-2"></li>
        </ng-container>
      </ul>
    </div>
  </div>

  <!-- Main Content (adjusted to give space for the fixed sidebar) -->
  <div class="flex flex-col w-full p-6 ml-[220px]">
    <!-- Panel Container: 5 Panels in a Row -->
    <div class="grid grid-cols-5 gap-4">
      <div *ngFor="let panel of panels" class="p-2">
        <div class="card p-3 shadow-md">
          <div class="font-semibold text-xl mb-2">{{ panel.title }}</div>
          <label class="block text-lg">{{ panel.count }}</label>
          <p class="m-0 text-sm">{{ panel.description }}</p>
        </div>
      </div>
    </div>
  
    <!-- Bird Eye View Text and Navigation Arrows (aligned to the left) -->
    <div class="mt-6 flex justify-between">
      <div class="flex items-center">
        <span class="text-start font-bold mr-2">Bird Eye view</span>
      </div>

      <!-- Navigation Arrows Section aligned to the right -->
      <div class="flex items-center">
  <!-- Left Arrow Button -->
  <button class="mx-2 text-xl p-2 rounded-md focus:outline-none">
    &lt; 
  </button>
  <span class="mx-2 text-lg">June</span>
  <span class="mx-2 text-xl">2022</span>
  <button class="mx-2 text-xl p-2 rounded-md  focus:outline-none">
    &gt;
  </button>
</div>

    </div>

    <div class="grid grid-cols-2 gap-2 mt-4">
      <div *ngFor="let panel of panelcol" class="p-2">
        <div class="card p-3 shadow-md">
          <div class="font-semibold text-xl mb-2">{{ panel.title }}</div>
          <label class="block text-3xl">{{ panel.count }}</label>
          <p class="m-0 text-sm">{{ panel.description }}</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mt-4">
      <!-- Loop over panelquestion and display them in two columns -->
      <div *ngFor="let panel of panelquestion; let i = index" class="p-2">
        <div class="card p-3 shadow-md">
          <!-- Display 3 Questions for the first panel -->
          <div *ngIf="i === 0">
            <div class="font-semibold text-m mb-2">{{ panel.question1 }}</div>
            <label class="block text-s">{{ panel.date1 }}</label>
            <hr class="mt-6 border-t-1 border-gray-300" />

            <div class="font-semibold text-m mb-2">{{ panel.question2 }}</div>
            <label class="block text-s">{{ panel.date2 }}</label>
            <hr class="mt-6 border-t-1 border-gray-300" />
            
            <div class="font-semibold text-m mb-2">{{ panel.question3 }}</div>
            <label class="block text-s">{{ panel.date3 }}</label>
            <hr class="mt-6 border-t-1 border-gray-300" />
          </div>

          <!-- Display 3 Questions for the second panel -->
          <div *ngIf="i === 1">
            <div class="font-semibold text-m mb-2">{{ panel.question1 }}</div>
            <label class="block text-s">{{ panel.date1 }}</label>
            <hr class="mt-6 border-t-1 border-gray-300" />

            <div class="font-semibold text-m mb-2">{{ panel.question2 }}</div>
            <label class="block text-s">{{ panel.date2 }}</label>
            <hr class="mt-6 border-t-1 border-gray-300" />

            <div class="font-semibold text-m mb-2">{{ panel.question3 }}</div>
            <label class="block text-s">{{ panel.date3 }}</label>
            <hr class="mt-6 border-t-1 border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

 
  `
})
export class home {
  model = [
    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/uikit/formlayout'] },
    { label: 'Feed', icon: 'pi pi-th-large', routerLink: ['/uikit/input'] },
    { label: 'Inspiration', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
    { label: 'Schedule', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
    { label: 'Integration', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
    { label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: ['/uikit/input'] },
    { label: 'Usage & Payments', icon: 'pi pi-fw pi-user', routerLink: ['/uikit/input'] },
    { label: 'Settings', icon: 'pi pi-cog', routerLink: ['/uikit/input'] },
    { separator: true }, 
    { label: 'Feedback', icon: 'pi pi-comments', routerLink: ['/uikit/profile'] },
    { label: 'Help', icon: 'pi pi-question-circle', routerLink: ['/uikit/profile'] },
    { label: 'Logout', icon: 'pi pi-power-off', routerLink: ['/logout'] }
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
  panelquestion=[
    { question1: 'Did you know that red pandas were given the name...', date1: '24 Feb 2025, Monday 6 PM',question2:'Did you know that red pandas were given the name...',date2:'24 Feb 2025, Monday 6 PM',question3:'Did you know that red pandas were given the name...',date3:'24 Feb 2025, Monday 6 PM'},
    { question1: 'Did you know that red pandas were given the name...', date1: '24 Feb 2025, Monday 6 PM',question2:'Did you know that red pandas were given the name...',date2:'24 Feb 2025, Monday 6 PM',question3:'Did you know that red pandas were given the name...',date3:'24 Feb 2025, Monday 6 PM'}
  ]
}
