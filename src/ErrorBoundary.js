import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
//shit not working
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    this.state.hasError = true;
  }
  componentDidCatch(error, errorInfo) {
    alert(error);
  }
  render() {
    console.log(this.state);
    if (this.state.hasError) {
      return (
        <div className="main">
          <h1>something went wrong</h1>
        </div>
      );
    }
    return this.props.children;
  }
}
