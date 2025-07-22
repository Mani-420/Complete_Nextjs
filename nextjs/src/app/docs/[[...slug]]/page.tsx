import React from 'react';

async function Docs({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;

  if (!slug) {
    return <div>Docs Home Page</div>;
  }

  if (slug.length === 2) {
    return (
      <h1>
        Docs Page for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug.length === 1) {
    return <h1>Docs Page for feature {slug[0]}</h1>;
  } else {
    return <div>Docs Home Page for {slug.join('/')}</div>;
  }
}

export default Docs;
