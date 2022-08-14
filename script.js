
let food, drink, dessert;

function selectFood(item){
   console.log(item);

   const foodButton = document.querySelector('.food .selected');

   if (foodButton) {
    foodButton.classList.remove('selected')
   }

   item.classList.add('selected');

   food = item.innerHTML;

   bottomButtonHabilited();
}   

function selectDrink(item){
   console.log(item);

   const drinkButton = document.querySelector('.drink .selected');

   if (drinkButton) {
    drinkButton.classList.remove('selected')
   }

   item.classList.add('selected');

   drink = item.innerHTML;

   bottomButtonHabilited();
} 

function selectDessert(item){
   console.log(item);

   const dessertButton = document.querySelector('.dessert .selected');

   if (dessertButton) {
      dessertButton.classList.remove('selected')
   }

   item.classList.add('selected');

   dessert = item.innerHTML;

   bottomButtonHabilited();
} 

function bottomButtonHabilited(){

   if (food !== undefined && drink !== undefined && dessert !== undefined ){
      const bottomButton = document.querySelector('.order-button')
      bottomButton.classList.add('order-habilited');
      const textOrder = document.querySelector('.order-text');
      textOrder.innerHTML = "Fechar pedido";
   }

}

//botão de finalizar pedido liberado

function finishOrder(food !== undefined && drink !== undefined && dessert !== undefined ){
   window.open("https://www.w3schools.com");
}