/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query Products($first: Int!, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    id\n    name\n    slug\n    description\n    price\n    createdAt\n    updatedAt\n    categories {\n      name\n    }\n  }\n}": types.ProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Products($first: Int!, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    id\n    name\n    slug\n    description\n    price\n    createdAt\n    updatedAt\n    categories {\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
