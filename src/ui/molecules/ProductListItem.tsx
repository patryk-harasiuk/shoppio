import { type ProductItemType } from "../types";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

type Props = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: Props) => {
	return (
		<li>
			<article>
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
