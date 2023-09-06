import { Product } from './02-insertProducts';

export type Item = {
  product: Product
  quantity: number
  phrase: string
  brand: string
};

export default function calculateTotalPrice(itens: Item[]): number {
  const total = itens.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
  return Number(total.toFixed(2));
}
