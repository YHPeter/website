import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

export default function Title({ title }) {
  return (
    <Head>
      <title key="title">{`${title} | Tech4Good`}</title>
    </Head>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};