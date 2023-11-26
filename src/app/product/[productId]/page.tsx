import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";

type Props = {
	params: { productId: string };
};

export default async function SingleProductPage({ params }: Props) {
	const product = await getProductById(params.productId);

	if (!product) return <div>No product found</div>;

	return (
		<>
			<article>
				<ProductListItemDescription product={product} />
			</article>
			<aside>
				<SuggestedProductsList />
			</aside>
		</>
	);
}
