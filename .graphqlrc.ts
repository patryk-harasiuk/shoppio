import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	ignoreNoDocuments: true,
	schema: "http://localhost:4000",
	documents: "src/**/*.graphql",
	generates: {
		"src/gql/": {
			preset: "client",
			plugins: [],
		},
	},
};

export default config;
