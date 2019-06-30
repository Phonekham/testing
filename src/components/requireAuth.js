import React from "react";

export default ChildComponent => {
  class ComposesComponent extends React.Component {
    render() {
      return <ChildComponent />;
    }
  }

  return ComposesComponent;
};
