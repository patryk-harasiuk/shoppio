import { type ProductListItemFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({ product: { categories, name, price } }: Props) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>

				<p className="text-sm text-gray-500">
					{/* TODO: Map over categories to display all of them */}
					<span className="sr-only">Kategoria:</span> {categories && categories[0]?.name}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span> {formatPrice(price / 100)}
			</p>
		</div>
	);
};
