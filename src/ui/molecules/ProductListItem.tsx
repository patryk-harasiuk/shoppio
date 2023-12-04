import Link from "next/link";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

type Props = {
	product: ProductListItemFragment;
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
