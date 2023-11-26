import Link from "next/link";
import { type ProductItemType } from "../types";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

type Props = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: Props) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					{/* <ProductCoverImage {...product} /> */}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
