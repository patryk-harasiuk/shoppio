import { ProductList } from "./ProductList";
import { getProductsList } from "@/api/products";

export const SuggestedProductsList = async () => {
	const products = await getProductsList(4);

	return <ProductList products={products} />;
};
