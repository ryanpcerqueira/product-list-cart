import { useState } from "react";
import { Card } from "./components/card";
import { desserts, type Dessert } from "./data";
import confirmation from "./images/icon-order-confirmed.svg";

export function Welcome() {
  const [cartItems, setCartItems] = useState([] as Dessert[]);
  const [showConfirmation, setShowConfirmation] = useState(false);
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
          <button
            className="mt-6 block w-full rounded-4xl bg-orange-800 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-orange-700"
            onClick={() => setShowConfirmation(true)}
          >
            Finalizar pedido
          </button>
          <div className="hidden">
            {
              JSON.stringify(cartItems, null, 2)
            }
          </div>
        </aside>
      </div>
      {showConfirmation && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
          <section
            aria-labelledby="confirmation-title"
            aria-modal="true"
            className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl"
            role="dialog"
          >
            <img
              className=" h-16 w-16"
              src={confirmation}
              alt="Pedido confirmado"
            />

            <h2 id="confirmation-title" className="text-2xl font-bold text-stone-900">
              Pedido confirmado!
            </h2>
            <h3 className="mt-2 text-stone-600">
              Esperamos que goste da sua sobremesa!
            </h3>
            <div className="mt-4 bg-orange-50 p-4 rounded-lg">
              <p className="mt-4 text-stone-600">
              Produtos adicionados ao carrinho:
              </p>
              <ul className="mt-2 list-disc pl-5 text-stone-600">
                {cartItems.map((item) => (
                  <li key={item.name}>{item.name} - ${item.price.toFixed(2)}</li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-stone-600">
              Total do pedido: ${totalPrice().toFixed(2)}
            </p>
            <button
              autoFocus
              className="mt-6 w-full rounded-4xl bg-orange-800 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700"
              onClick={() => setShowConfirmation(false)}
            >
              Fazer Novo Pedido
            </button>
          </section>
        </div>
      )}
    </main>
  );
}