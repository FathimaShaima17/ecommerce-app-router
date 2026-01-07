'use client';
import { useCart } from "@/app/context/CartContext";

export default function CartItem({ item }: { item: any }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 border-b py-4">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
      <div className="flex-1">
        <h2 className="font-semibold text-black">{item.title}</h2>
        <p className="text-gray-600">₹{(item.price * 83).toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={() => decreaseQty(item.id)} className="px-2 py-1 border rounded">-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)} className="px-2 py-1 border rounded">+</button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 font-semibold"
      >
        Remove
      </button>
    </div>
  );
}
