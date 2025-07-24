import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog Page'
  }
};

function Blog() {
  return (
    <div className="m-3 flex flex-col items-center justify-center min-h-screen">
      This is Blog Page
    </div>
  );
}

export default Blog;
