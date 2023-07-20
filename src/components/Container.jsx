import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="w-10/12">
      <div>{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
