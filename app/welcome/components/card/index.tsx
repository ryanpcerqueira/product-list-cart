import cartIcon from "../../images/icon-add-to-cart.svg"

type CardProps = {
	image: string;
	name: string;
	category: string;
	price: number;
	  onAddToCart?: () => void;
};

export function Card({ image, name, category, price, onAddToCart }: CardProps) {
	return (
		<article className="min-w-0 flex-col items-center justify-center">
		<div className="relative">
			<img
				className="aspect-square w-full rounded-lg object-cover"
				src={image}
				alt={name}
			/>
      <button className="absolute bottom-4 left-8 translate-y-1/2 w-40 flex items-center justify-center gap-2 rounded-4xl bg-white px-4 py-2 text-center text-sm font-semibold text-orange-800 hover:bg-orange-700 hover:text-white" onClick={onAddToCart}>
        <img src={cartIcon} alt="Adicionar ao carrinho"/>
        Adicionar
      </button>
      </div>
			<p className="mt-3 text-sm text-stone-500">{category}</p>
			<h2 className="mt-1 font-semibold text-stone-900">{name}</h2>
			<p className="mt-1 font-semibold text-orange-800">${price.toFixed(2)}</p>
		</article>
	);
}

