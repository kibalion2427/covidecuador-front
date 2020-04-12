import React, { Component } from "react";
import { Card } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const MapColorContainer = (props) => {
  // const newColor = props.colorTheme;
  return (
    <Card
      size="small"
      title="Redux color"
      style={{ width: 300, backgroundColor: props.colorTheme }}
    >
      <p>Contenido => {props.colorTheme}</p>
    </Card>
  );
};

MapColorContainer.prototypes = {
  colorTheme: PropTypes.string.isRequired,
};

const mapStateToProps = ({ theme }) => ({ colorTheme: theme }); //le llega un objeto state con todos los estados globales definidos en los reducers

export default connect(mapStateToProps, null)(MapColorContainer);
