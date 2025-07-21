import React from 'react';

async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div className="m-3 flex flex-col items-center justify-center min-h-screen">
      Review Details Page for Product ID: {productId} and Review ID: {reviewId}
    </div>
  );
}

export default ReviewDetails;
