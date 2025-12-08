import { ItemCounter } from "../shopping-cart/ItemCounter";

interface ItemInCart {
  productTitle: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productTitle: "Nintendo Switch 2", quantity: 2 },
  { productTitle: "Pro controler", quantity: 2 },
  { productTitle: "Nintendo Switch V2", quantity: 2 },
  { productTitle: "Play Station 5 Pro", quantity: 4 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {/* <ItemCounter quantity={1} productName="Nintendo Switch 2" />
      <ItemCounter quantity={2} productName="Pro controler" />
      <ItemCounter quantity={3} productName="Nintendo Switch V2" />
      <ItemCounter quantity={4} productName="Play Station 5 Pro" /> */}
      {itemsInCart.map(({ productTitle, quantity }) => (
        <ItemCounter
          key={productTitle}
          productName={productTitle}
          quantity={quantity}
        />
      ))}
    </>
  );
}
