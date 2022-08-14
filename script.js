
let food, drink, dessert;

function selectFood(item){

   const foodButton = document.querySelector('.food .selected');

   if (foodButton) {
    foodButton.classList.remove('selected');
   }

   item.classList.add('selected');

   food = item.innerHTML;

   bottomButtonHabilited();
}   

function selectDrink(item){

   const drinkButton = document.querySelector('.drink .selected');

   if (drinkButton) {
    drinkButton.classList.remove('selected');
   }

   item.classList.add('selected');

   drink = item.innerHTML;

   bottomButtonHabilited();
} 

function selectDessert(item){

   const dessertButton = document.querySelector('.dessert .selected');

   if (dessertButton!==null) {
      dessertButton.classList.remove('selected');
   }

   item.classList.add('selected');

   dessert = item.innerHTML;

   bottomButtonHabilited();
} 

function bottomButtonHabilited(){

   if (food !== undefined && drink !== undefined && dessert !== undefined ){
      const bottomButton = document.querySelector('.order-button');
      bottomButton.classList.add('order-habilited');
      const textOrder = document.querySelector('.order-text');
      textOrder.innerHTML = "Fechar pedido";
   }

}

//botão de finalizar pedido liberado

function finishOrder(){
   let text = "Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: PudimTotal: R$ 27.70";
   let x = encodeURIComponent(text);
   console.log(x);

   if (food !== undefined && drink !== undefined && dessert !== undefined ){
      window.open(`https://wa.me/5549999072740?text=${x}`);
   }
}  

