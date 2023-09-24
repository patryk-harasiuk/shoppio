import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductItemType } from "../types";

type Props = {
	products: ProductItemType[];
};

export const ProductList = ({ products }: Props) => {
	return (
		<ul className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
