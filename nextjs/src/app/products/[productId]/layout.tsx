import React from 'react';

function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 ">
      {children}
      <h2>Product Details</h2>
    </div>
  );
}

export default ProductDetailsLayout;
