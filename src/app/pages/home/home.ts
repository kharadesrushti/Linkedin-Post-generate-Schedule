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
      <div class="bg-white w-[220px] p-2 h-full">
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

      <!-- Main Content -->
      <div class="flex flex-col w-full p-6">

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
    { separator: true }, // Adds a separator
    { label: 'Feedback', icon: 'pi pi-comments', routerLink: ['/uikit/profile'] },
    { label: 'Help', icon: 'pi pi-question-circle', routerLink: ['/uikit/profile'] },
    { label: 'Logout', icon: 'pi pi-power-off', routerLink: ['/logout'] }
  ];

  panels = [
    { title: 'Index', count: '672', description: 'Total posts in Inbox' },
    { title: 'Draft', count: '63', description: 'Total posts in Draft' },
    { title: 'Review', count: '7', description: 'Total posts in Review' },
    { title: 'Posted', count: '982', description: 'Total posts posted' },
    { title: 'Browsed', count: '3.5K', description: 'Total posts browsed' }
  ];
}
