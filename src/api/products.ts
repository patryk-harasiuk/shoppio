import {
	ProductDocument,
	type ProductListItemFragment,
	ProductsByCategoryDocument,
	ProductsDocument,
	ProductsIdsDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const getProductById = async (id: ProductListItemFragment["id"]) => {
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

export const getProductsListByCategory = async (first: number, category: string, skip?: number) => {
	const response = await executeGraphql(ProductsByCategoryDocument, { first, category, skip });

	return response.productsByCategory;
};
