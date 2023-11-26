export type ProductItemType = {
	id: string;
	categories: ({ name: string } | null)[];
	name: string;
	price: number;
	// coverImage: {
	// 	alt: string;
	// 	src: string;
	// };
};
