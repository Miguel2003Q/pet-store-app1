import { Component } from '@angular/core';
import {CartServicesService} from './../../services/cart-services.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})


export class CatalogoComponent {
	// inyectar la dependencia del servicio en el constructor.
  constructor(private cartServicesService: CartServicesService){

  }
  
  // crea un método para añadir un producto al carrito
  
  addToCart(product: any) { 
    this.cartServicesService.addToCart(product)
    console.log(product)
  }
  
	//....
  products = []

}
