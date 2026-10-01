import baklava from "./images/image-baklava-desktop.jpg";
import brownie from "./images/image-brownie-desktop.jpg";
import cake from "./images/image-cake-desktop.jpg";
import cremeBrulee from "./images/image-creme-brulee-desktop.jpg";
import macaron from "./images/image-macaron-desktop.jpg";
import meringue from "./images/image-meringue-desktop.jpg";
import pannaCotta from "./images/image-panna-cotta-desktop.jpg";
import tiramisu from "./images/image-tiramisu-desktop.jpg";
import waffle from "./images/image-waffle-desktop.jpg";

export type Dessert = {
	image: string;
	name: string;
	category: string;
	price: number;
};

export const desserts: Dessert[] = [
	{
		image: waffle,
		name: "Waffle with Berries",
		category: "Waffle",
		price: 6.5,
	},
	{
		image: cremeBrulee,
		name: "Vanilla Bean Crème Brûlée",
		category: "Crème Brûlée",
		price: 7,
	},
	{
		image: macaron,
		name: "Macaron Mix of Five",
		category: "Macaron",
		price: 8,
	},
	{
		image: tiramisu,
		name: "Classic Tiramisu",
		category: "Tiramisu",
		price: 5.5,
	},
	{
		image: baklava,
		name: "Pistachio Baklava",
		category: "Baklava",
		price: 4,
	},
	{
		image: meringue,
		name: "Lemon Meringue Pie",
		category: "Pie",
		price: 5,
	},
	{
		image: cake,
		name: "Red Velvet Cake",
		category: "Cake",
		price: 4.5,
	},
	{
		image: brownie,
		name: "Salted Caramel Brownie",
		category: "Brownie",
		price: 5.5,
	},
	{
		image: pannaCotta,
		name: "Vanilla Panna Cotta",
		category: "Panna Cotta",
		price: 6.5,
	},
];
