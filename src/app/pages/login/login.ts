import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'topbar-widget',
    standalone: true,
    imports: [RouterModule, ButtonModule],
    template: `
        <!-- Header Section -->
        <header class="flex items-center justify-between p-4">
            <a class="flex items-center" href="#">
                <img src="assets/images/unicornicon.svg" alt="Unicorn Logo" class="w-12 h-12">
                <span class="text-[#1A1A1A] text-[14.45px] w-[91.55px] font-bold ml-4">
                    UI Unicorn
                </span>
            </a>
        </header>

       <!-- Main Content Layout -->
<div class="flex flex-col md:flex-row h-[85vh] mt-6">
    <div class="w-full md:w-1/2 flex items-center justify-center">
        <img src="assets/images/loginpagricon.svg" alt="Login Page Icon" class="w-4/4 max-h-[475px] h-auto">
    </div>

    <!-- Right Side: Text & Button -->
    <div class="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
        <div class="font-['Zen_Kaku_Gothic_Antique'] font-bold text-[31.25px] leading-[37.5px] text-[#242424] text-center sm:text-lg md:text-xl lg:text-2xl">
            Join & Automate your <br> LinkedIn Content Generation
        </div>
        <div class="mt-3">
            <!-- Button with LinkedIn Icon & Custom Styles -->
            <p-button 
                label="Sign in with LinkedIn" 
                severity="secondary" 
                icon="pi pi-linkedin text-[#0A66C2]" 
                iconPos="left" 
                outlined  
                class="w-[300px] h-[46px] sm:w-[250px] mt-4 px-4 py-2 font-['Roboto'] text-[16px] text-[#000000] 
                       flex items-center justify-center border-[#1E2432]">
            </p-button>
        </div>
    </div>
</div>
    `
})
export class login {
    constructor(public router: Router) { }
}
