import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	const res = await getProductsList(10);

	return <ProductList products={res} />;
}
