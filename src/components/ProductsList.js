import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

const ProductsList = ({ children }) => <Container fluid>{children}</Container>;

ProductsList.propTypes = {
  children: PropTypes.node
};

export default ProductsList;
