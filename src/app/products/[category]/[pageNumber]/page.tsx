import { getProductsListByCategory } from "@/api/products";

export default async function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsListByCategory(2, params.category);

	return (
		<h1>
			Produkty z kategorii {params.category}, strona {params.pageNumber}
			<pre>{JSON.stringify(products, null, 2)}</pre>
		</h1>
	);
}
