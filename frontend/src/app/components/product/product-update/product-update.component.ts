import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{

  product!: Product

  constructor(
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute,private headerService: HeaderService){
      headerService.headerData ={
      title: "Alterar Produto",
      icon: 'edit',
      routeUrl: '/products/update'
      }
    }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product =>{
      this.product = product
    })
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(product =>{
      this.productService.showMessage("Produto atualizado com sucesso")
      this.router.navigate(["/products"])
    }
  )}

  cancelProduct(): void{
    this.router.navigate(["/products"])
  }
}
