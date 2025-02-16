import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Customer, CustomerService, Representative } from '../service/customer.service';
import { Product, ProductService } from '../service/product.service';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UsageService } from '../service/usage.service';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [CommonModule, RouterModule,ButtonModule, TableModule, TagModule,FormsModule,RatingModule],
  templateUrl: './usage.component.html',
  styles: `
        .p-datatable-frozen-tbody {
            font-weight: bold;
        }

        .p-datatable-scrollable .p-frozen-column {
            font-weight: bold;
        }
    `,
   providers: [ConfirmationService, MessageService, CustomerService,UsageService ]
})

export class Usage implements OnInit{
  panelusage = [
    { title: 'Current Credit Usage', count: '$0.53', description: 'Total usage since 1st Feb 2024', category: 'usage' },
    { title: 'Estimated Credit Usage', count: '$4.6', description: 'Estimated usage for Feb 2024', category: 'usage' },
  ];

  customers1: Customer[] = [];
  
      customers2: Customer[] = [];
  
      customers3: Customer[] = [];
  
      selectedCustomers1: Customer[] = [];
  
      selectedCustomer: Customer = {};
  
      representatives: Representative[] = [];
  
      statuses: any[] = [];
  
      products: Product[] = [];
  
      rowGroupMetadata: any;
  
      expandedRows: expandedRows = {};
  
      activityValues: number[] = [0, 100];
  
      isExpanded: boolean = false;
  
      balanceFrozen: boolean = false;
  
      loading: boolean = true;
  
      @ViewChild('filter') filter!: ElementRef;
  
      constructor(
          private customerService: CustomerService,
          private usageservice: UsageService
      ) {}
  
      ngOnInit() {
          this.customerService.getCustomersLarge().then((customers) => {
              this.customers1 = customers;
              this.loading = false;
  
              // @ts-ignore
              this.customers1.forEach((customer) => (customer.date = new Date(customer.date)));
          });
          this.customerService.getCustomersMedium().then((customers) => (this.customers2 = customers));
          this.customerService.getCustomersLarge().then((customers) => (this.customers3 = customers));
          this.usageservice.getProductsWithOrdersSmall().then((data) => (this.products = data));
  
          this.representatives = [
              { name: 'Amy Elsner', image: 'amyelsner.png' },
              { name: 'Anna Fali', image: 'annafali.png' },
              { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
              { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
              { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
              { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
              { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
              { name: 'Onyama Limba', image: 'onyamalimba.png' },
              { name: 'Stephen Shaw', image: 'stephenshaw.png' },
              { name: 'XuXue Feng', image: 'xuxuefeng.png' }
          ];
  
          this.statuses = [
              { label: 'Unqualified', value: 'unqualified' },
              { label: 'Qualified', value: 'qualified' },
              { label: 'New', value: 'new' },
              { label: 'Negotiation', value: 'negotiation' },
              { label: 'Renewal', value: 'renewal' },
              { label: 'Proposal', value: 'proposal' }
          ];
      }
  
      onSort() {
          this.updateRowGroupMetaData();
      }
  
      updateRowGroupMetaData() {
          this.rowGroupMetadata = {};
  
          if (this.customers3) {
              for (let i = 0; i < this.customers3.length; i++) {
                  const rowData = this.customers3[i];
                  const representativeName = rowData?.representative?.name || '';
  
                  if (i === 0) {
                      this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
                  } else {
                      const previousRowData = this.customers3[i - 1];
                      const previousRowGroup = previousRowData?.representative?.name;
                      if (representativeName === previousRowGroup) {
                          this.rowGroupMetadata[representativeName].size++;
                      } else {
                          this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
                      }
                  }
              }
          }
      }
  
      expandAll() {
          if (!this.isExpanded) {
              this.products.forEach((product) => (product && product.name ? (this.expandedRows[product.name] = true) : ''));
          } else {
              this.expandedRows = {};
          }
          this.isExpanded = !this.isExpanded;
      }
  
      formatCurrency(value: number) {
          return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      }
  
      onGlobalFilter(table: Table, event: Event) {
          table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
      }
  
      clear(table: Table) {
          table.clear();
          this.filter.nativeElement.value = '';
      }
  
      getSeverity(status: string) {
          switch (status) {
              case 'qualified':
              case 'instock':
              case 'INSTOCK':
              case 'DELIVERED':
              case 'delivered':
                  return 'success';
  
              case 'negotiation':
              case 'lowstock':
              case 'LOWSTOCK':
              case 'PENDING':
              case 'pending':
                  return 'warn';
  
              case 'unqualified':
              case 'outofstock':
              case 'OUTOFSTOCK':
              case 'CANCELLED':
              case 'cancelled':
                  return 'danger';
  
              default:
                  return 'info';
          }
      }
  
      calculateCustomerTotal(name: string) {
          let total = 0;
  
          if (this.customers2) {
              for (let customer of this.customers2) {
                  if (customer.representative?.name === name) {
                      total++;
                  }
              }
          }
  
          return total;
      }
      toggleSelectAll(event: any) {
        const checked = event.target.checked;
        this.products.forEach((product: any) => product.selected = checked);
    }
  
}