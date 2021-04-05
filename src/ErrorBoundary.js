import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      <Redirect to="/error" />;
    }
    return this.props.children;
  }
}
