import { Metadata } from 'next';
import React from 'react';

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product Details for ${id}`,
    description: `Details of product with ID ${id}`
  };
};

async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return (
    <div className="m-3 flex flex-col items-center justify-center min-h-screen">
      Product Details Page for Product ID: {productId}
    </div>
  );
}

export default ProductDetails;
