import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sobremesas | Cardápio" },
    { name: "description", content: "Cardápio de sobremesas e carrinho de pedidos." },
  ];
}

export default function Home() {
  return <Welcome />;
}
