import { useState } from "react";
import { Card } from "./components/card";
import { desserts, type Dessert } from "./data";

export function Welcome() {
  const [cartItems, setCartItems] = useState([] as Dessert[]);
  function totalPrice() {
    let total = 0;
    for (const item of cartItems) {
      total += item.price;
    }
    return total;
  }
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-8 md:px-10 md:py-12">
      <h1 className="mb-6 text-3xl font-bold text-stone-900">Sobremesas</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <section
          aria-label="Cardápio de sobremesas"
          className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {desserts.map((dessert) => (
            <Card key={dessert.name} {...dessert} onAddToCart={() => setCartItems([...cartItems, dessert])} />
          ))}
        </section>

        <aside
          aria-label="Carrinho de compras"
          className="h-fit rounded-lg bg-white p-6"
        >
          <h2 className="text-xl font-bold text-orange-800">Seu carrinho ({cartItems.length})</h2>
          <p className="mt-6 text-sm text-stone-500">
            Adicione sobremesas ao seu carrinho para ver os itens aqui.
          </p>
            <p>
              <span className="font-light text-gray-500 text-12">Total:</span> <span className="font-semibold text-stone-900">${totalPrice().toFixed(2)}</span>
            </p>
          <button>
            <span className="mt-6 block w-full rounded-lg bg-orange-800 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-orange-700">
              Finalizar pedido
            </span>
          </button>
          <div>
            {
              JSON.stringify(cartItems, null, 2)
            }
          </div>
        </aside>
      </div>
    </main>
  );
}