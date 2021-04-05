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
  componentDidCatch(error, errorInfo) {
    console.log(errorInfo);
  }
  render() {
    if (this.state.hasError) {
      <div className="main">
        <h1>something went wrong</h1>
      </div>;
    }
    return this.props.children;
  }
}
