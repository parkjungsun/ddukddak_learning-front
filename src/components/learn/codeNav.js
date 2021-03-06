import React, { Component } from "react";

class CodeNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutor: 0,
      termi: 1,
      resul: 2,
      canva: 3
    };
  }
  render() {
    const ex = this.props;
    return (
      <div className="codenav">
        <div
          className={ex.index === 0 ? "navunit unit_a" : "navunit"}
          onClick={() => ex.onChangeIndex(this.state.tutor)}
        >
          <p>Tutorial</p>
        </div>
        <div
          className={ex.index === 1 ? "navunit unit_b" : "navunit"}
          onClick={() => ex.onChangeIndex(this.state.termi)}
        >
          <p>Terminal</p>
        </div>
        <div
          className={ex.index === 2 ? "navunit unit_c" : "navunit"}
          onClick={() => ex.onChangeIndex(this.state.resul)}
        >
          <p>Result</p>
        </div>
        <div
          className={ex.index === 3 ? "navunit unit_d" : "navunit"}
          onClick={() => ex.onChangeIndex(this.state.canva)}
        >
          <p>Test</p>
        </div>
      </div>
    );
  }
}

export default CodeNav;
