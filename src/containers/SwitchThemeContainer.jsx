import React, { Component } from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import { setSelectedTheme } from "../actions";
import { connect } from "react-redux";

const SwitchThemeContainer = props => {
  const handleThemeButton = () => {
    // debugger;
    props.setThemeDispatch(props.color);
    // localStorage.setItem("theme", props.color);
  };
  return <Button onClick={handleThemeButton}>Change state</Button>;
};

SwitchThemeContainer.prototypes = {
  setSelectedTheme: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setThemeDispatch: value => dispatch(setSelectedTheme(value))
});

export default connect(null, mapDispatchToProps)(SwitchThemeContainer);
