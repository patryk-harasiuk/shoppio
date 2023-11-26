import { ProductDocument, ProductsDocument, ProductsIdsDocument } from "@/gql/graphql";
import type { ProductItemType } from "@/ui/types";
import { executeGraphql } from "@/utils/executeGraphql";

export const getProductById = async (id: ProductItemType["id"]) => {
	const response = await executeGraphql(ProductDocument, { productId: id });

	return response.product;
};

export const getProductsList = async (first: number, skip?: number) => {
	const response = await executeGraphql(ProductsDocument, { first, skip });

	return response.products;
};

export const getProductsIds = async (first: number, skip?: number) => {
	const response = await executeGraphql(ProductsIdsDocument, { first, skip });

	return response.products;
};
