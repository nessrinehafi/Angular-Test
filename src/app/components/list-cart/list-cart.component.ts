import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
interface Item {
  name: string;
  image: string;
  price: number;
  addedToCart: boolean;
  desc: string;
}
@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent implements OnInit {

  constructor( private snackBar : MatSnackBar  ) { }
  itemStatis : string = "add_shopping_cart";
  iconName : string ="Add To Cart";
  ngOnInit(): void {
 
  }

  items: Item[] = [
    {
      name: 'Kokorowatari',
      image: 'https://i.imgur.com/POR1PVd.jpg',
      price: 444,
      addedToCart: false,
      desc: `
        Demon sword that harms and effectively kills oddities.
        The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.`
    },
    {
      name: 'Star Platinum',
      image: 'https://i.imgur.com/cdJ6GDW.jpg',
      price: 555,
      addedToCart: false,
      desc: `Star Platinum is the Stand of Kujo Jotaro.
      It has long, flowing hair, and resembling a tall, well-built man.
      It is silent, except when it throws punches, during which it cries "ORAORAORA" loudly and repeatedly.`
    },
    {
      name: 'The World',
      price: 500,
      addedToCart: false,
      image: 'https://i.imgur.com/3KBm7hK.jpg',
      desc: `The World is the Stand of DIO. The World shows no particular personality,
      although it occasionally smiles as it pummels others,
      hinting that it may be a rather cruel entity that takes pleasure in causing pain.
      Its Stand cry, seemingly communicated by DIO, is Muda Muda Muda!`
    },
    {
      name: '3D Maneuver Gear',
      price: 200,
      addedToCart: false,
      image: 'https://i.imgur.com/9E0Agn2.jpg',
      desc: `The vertical maneuvering equipment is a set of equipment developed by humans allowing for great mobility.
      The equipment enables the user to fight in a 3D space as opposed to a 2D one.
      The equipment itself takes the form of a body harness that encompasses much of the body below the neck.`
    },
    {
      name: 'Excalibur',
      price: 300,
      addedToCart: false,
      image: 'https://i.imgur.com/nutN73L.jpg',
      desc: `Excalibur: Sword of Promised Victory is the strongest and most majestic holy sword that symbolizes King Arthur.
      As that which can be called the physical actualization of her ideals and the symbol of her heroism,
      it is her greatest and most powerful Noble Phantasm.`
    },
    {
      name: 'Dragon Slayer',
      price: 450,
      addedToCart: false,
      image: 'https://i.imgur.com/WPdYq5Z.jpg',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`
    },
  ];
  itemStatus(i){
    this.items[i].addedToCart =  !this.items[i].addedToCart
    for(let a in this.items){
  
    }
}
getInCart() {
  return this.items.filter(cart => cart.addedToCart);
}
getTotalprice()
{    
  let itemsInCart = this.getInCart();
  let total:number = 0 ; 
  for(var i = 0; i < itemsInCart.length; i++){
    total += itemsInCart[i].price;
}
return total;
}
buyAction()
{
  const price:number= this.getTotalprice(); 
  let message = ""
  if(price === 0)
  {
  message = "Please buy something"  }
  else if (price<1000){
    message="Transaction Success!";}
    else{
      message = "You don't have enough gold!";
    }
    let snackBarRef = this.snackBar.open(message, 'ok');
  }

  
}


