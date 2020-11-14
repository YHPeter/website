import React from 'react';
import Hero from "../src/showcase/Hero";
import Title from "../src/layouts/Title";

export default function Index() {
  return (
    <>
      <Title title="Home" />
      <Hero />
    </>
  );
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['hero'],
})
