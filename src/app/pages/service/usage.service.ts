import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface InventoryStatus {
    label: string;
    value: string;
}

export interface Product {
    id?: string;
    code?: string;
    invoiceNo?: string;
    description?: string;
    price?: number;
    inventoryStatus?: string;
    date?: string;  
    selected?: boolean; 
}

@Injectable({
    providedIn: 'root'
})
export class UsageService {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                invoiceNo: '7878787878',
                description: 'Product Description',
                
                price: 65,
                date: '2020-04-22',
                inventoryStatus: 'Success',
                selected: false 
               
            },
            {
                id: '1001',
                code: 'nvklal433',
                invoiceNo: '7878787878',
                description: 'Product Description',
                
                price: 72,
                date: '2020-04-22',
                
                inventoryStatus: 'Failed',
                selected: false 
                
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                invoiceNo: '7878787878',
                description: 'Product Description',
                
                price: 79,
                date: '2020-04-22',
              
                inventoryStatus: 'Success',
                selected: false 
             
            },
            {
                id: '1003',
                code: '244wgerg2',
                invoiceNo: '7878787878',
                description: 'Product Description',
              
                price: 29,
                date: '2020-04-22',
              
                inventoryStatus: 'Failed',
                selected: false 
                
            },{
                id: '1004',
                code: 'h456wer53',
                invoiceNo: '76464738322',
                description: 'Product Description',
             
                price: 15,
                date: '2020-03-21',
          
                inventoryStatus: 'Failed',
                selected: false 
              
            },
            {
                id: '1005',
                code: 'av2231fwg',
                invoiceNo: ' 724256266633',
                description: 'Product Description',
        
                price: 120,
                date: '2018-12-14',
                inventoryStatus: 'Success',
                selected: false 
          
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                invoiceNo: '2273563848',
                description: 'Product Description',
                
                price: 32,
                date: '2022-09-24',
           
                inventoryStatus: 'Failed',
                selected: false 
               
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                invoiceNo: '63536474664',
                description: 'Product Description',
            
                price: 34,
                date: '2018-04-17',
           
                inventoryStatus: 'Failed',
                selected: false 
              
            },
            {
                id: '1008',
                code: 'vbb124btr',
                invoiceNo: '2753537748585',
                description: 'Product Description',
          
                price: 99,
                date: '2017-02-14',
           
                inventoryStatus: 'Success',
                selected: false 
                
            },
            
        ];
    }

    getProductsWithOrdersData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                invoiceNo: '7878787878',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                date: '2020-04-21',
             
                inventoryStatus: 'Failed',
                selected: false ,
               
                orders: [
                    {
                        id: '1000-0',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 65,
                        quantity: 1,
                        customer: 'David James',
                        status: 'Sucess'
                    },
                    {
                        id: '1000-1',
                        productCode: 'f230fh0g3',
                        date: '2020-05-14',
                        amount: 130,
                        quantity: 2,
                        customer: 'Leon Rodrigues',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1000-2',
                        productCode: 'f230fh0g3',
                        date: '2019-01-04',
                        amount: 65,
                        quantity: 1,
                        customer: 'Juan Alejandro',
                        status: 'RETURNED'
                    },
                    {
                        id: '1000-3',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 195,
                        quantity: 3,
                        customer: 'Claire Morrow',
                        status: 'Sucess'
                    }
                ]
            },
            {
                id: '1001',
                code: 'nvklal433',
                invoiceNo: '7837644333',
                description: 'Product Description',
                image: 'black-watch.jpg',
                price: 72,
                date: '2021-02-20',
               
                inventoryStatus: 'Success',
                selected: false ,
               
                orders: [
                    {
                        id: '1001-0',
                        productCode: 'nvklal433',
                        date: '2020-05-14',
                        amount: 72,
                     
                        customer: 'Maisha Jefferson',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1001-1',
                        productCode: 'nvklal433',
                        date: '2020-02-28',
                        amount: 144,
                        quantity: 2,
                        customer: 'Octavia Murillo',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                invoiceNo: '7256789333',
                description: 'Product Description',
                price: 79,
                date: '2023-04-15',
           
                inventoryStatus: 'Failed',
                selected: false ,
                
                orders: [
                    {
                        id: '1002-0',
                        productCode: 'zz21cz3c1',
                        date: '2020-07-05',
                        amount: 79,
                       
                        customer: 'Stacey Leja',
                        status: 'Sucess'
                    },
                    {
                        id: '1002-1',
                        productCode: 'zz21cz3c1',
                        date: '2020-02-06',
                        amount: 79,
                        quantity: 1,
                        customer: 'Ashley Wickens',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1003',
                code: '244wgerg2',
                invoiceNo: '88366376363',
                description: 'Product Description',
                
                price: 29,
                date: '2020-04-22',
              
                inventoryStatus: 'Failed',
                selected: false ,
               
                orders: []
            },
            {
                id: '1004',
                code: 'h456wer53',
                invoiceNo: '3865265533',
                description: 'Product Description',
                image: 'bracelet.jpg',
                price: 15,
                date: '2017-09-18',
               
                inventoryStatus: 'Success',
                selected: false ,
       
                orders: [
                    {
                        id: '1004-0',
                        productCode: 'h456wer53',
                        date: '2020-09-05',
                        amount: 60,
                    
                        customer: 'Mayumi Misaki',
                        status: 'PENDING'
                    },
                    {
                        id: '1004-1',
                        productCode: 'h456wer53',
                        date: '2019-04-16',
                        amount: 2,
                      
                        customer: 'Francesco Salvatore',
                        status: 'Sucess'
                    }
                ]
            },
           
        ];
    }

    status: string[] = ['Sucess','Failed'];

    
    constructor(private http: HttpClient) {}

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    }

    generatePrduct(): Product {
        const product: Product = {
            id: this.generateId(),
            description: 'Product Description',
            price: this.generatePrice(),
            inventoryStatus: this.generateStatus(),
           
        };

        return product;
    }

    generateId() {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299) + 1);
    }

    generateStatus() {
        return this.status[Math.floor(Math.random() * this.status.length)];
    }

   
}
