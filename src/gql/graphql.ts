/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
};

export type Category = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Product = {
  categories: Array<Maybe<Category>>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  categories: Array<Category>;
  product?: Maybe<Product>;
  products: Array<Product>;
  productsByCategory: Array<Product>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  first: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductsByCategoryArgs = {
  category: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductQuery = { product?: { id: string, name: string, slug: string, description: string, price: number, createdAt: unknown, updatedAt: unknown, categories: Array<{ name: string } | null> } | null };

export type ProductListItemFragment = { id: string, name: string, slug: string, price: number, createdAt: unknown, updatedAt: unknown, categories: Array<{ name: string } | null> };

export type ProductsQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsQuery = { products: Array<{ id: string, name: string, slug: string, price: number, createdAt: unknown, updatedAt: unknown, categories: Array<{ name: string } | null> }> };

export type ProductsByCategoryQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  category: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsByCategoryQuery = { productsByCategory: Array<{ id: string, name: string, slug: string, price: number, createdAt: unknown, updatedAt: unknown, categories: Array<{ name: string } | null> }> };

export type ProductsIdsQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsIdsQuery = { products: Array<{ id: string }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  slug
  price
  createdAt
  updatedAt
  categories {
    name
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const ProductDocument = new TypedDocumentString(`
    query Product($productId: ID!) {
  product(id: $productId) {
    id
    name
    slug
    description
    price
    createdAt
    updatedAt
    categories {
      name
    }
  }
}
    `) as unknown as TypedDocumentString<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = new TypedDocumentString(`
    query Products($first: Int!, $skip: Int) {
  products(first: $first, skip: $skip) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  slug
  price
  createdAt
  updatedAt
  categories {
    name
  }
}`) as unknown as TypedDocumentString<ProductsQuery, ProductsQueryVariables>;
export const ProductsByCategoryDocument = new TypedDocumentString(`
    query ProductsByCategory($first: Int!, $category: String!, $skip: Int) {
  productsByCategory(first: $first, category: $category, skip: $skip) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  slug
  price
  createdAt
  updatedAt
  categories {
    name
  }
}`) as unknown as TypedDocumentString<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>;
export const ProductsIdsDocument = new TypedDocumentString(`
    query ProductsIds($first: Int!, $skip: Int) {
  products(first: $first, skip: $skip) {
    id
  }
}
    `) as unknown as TypedDocumentString<ProductsIdsQuery, ProductsIdsQueryVariables>;