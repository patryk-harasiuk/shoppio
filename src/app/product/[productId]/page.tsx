import { Suspense } from "react";
import { getProductById, getProductsIds } from "@/api/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";

type Props = {
	params: { productId: string };
};

export const generateStaticParams = async () => {
	const productsIds = await getProductsIds(10);

	return productsIds.map(({ id }) => ({
		productId: id,
	}));
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
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
