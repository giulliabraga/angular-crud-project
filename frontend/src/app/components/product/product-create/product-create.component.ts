import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{


  product: Product = {
    name: '',
    price: null
  }

  constructor(private router: Router,
    private productService: ProductService,private headerService: HeaderService){
      headerService.headerData ={
      title: "Novo Produto",
      icon: 'add',
      routeUrl: '/products/create'
      }
    }
  ngOnInit(): void {
  }

  createProduct(): void {
    console.log('método adicionado');
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })

  }

  cancelProduct(): void {
    this.router.navigate(['/products'])
  }


}
