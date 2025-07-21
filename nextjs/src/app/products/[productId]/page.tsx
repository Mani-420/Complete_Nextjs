import React from 'react';

async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <div className="m-3 flex flex-col items-center justify-center min-h-screen">
      Product Details Page for Product ID: {productId}
    </div>
  );
}

export default ProductDetails;
