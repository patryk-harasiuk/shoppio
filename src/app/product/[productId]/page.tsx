type Props = {
	params: { productId: string };
};

export default async function SingleProductPage({ params }: Props) {
	return (
		<div>
			<h1>Single Product Page</h1>
			{params.productId}
		</div>
	);
}
