import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';




@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="p-4">
      <h1>Usage & Payments Page</h1>
      <p>This is the usage details page.</p>
    </div>
    
`
})
  export class Usage{
    
  }