import { Component } from '@angular/core';
import { Product } from '../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {

  product!: Product

  constructor(
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute,private headerService: HeaderService){
      headerService.headerData ={
      title: "Deletar Produto",
      icon: 'delete',
      routeUrl: '/products/delete'
      }
    }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product =>{
      this.product = product
    })
  }

  deleteProduct(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.delete(this.product).subscribe(product =>{
      this.productService.showMessage("Produto deletado com sucesso")
      this.router.navigate(["/products"])
    }
  )}

  cancelProduct(): void{
    this.router.navigate(["/products"])
  }
}
