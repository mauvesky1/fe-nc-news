import React from "react";

const ErrorPage = props => {
  return (
    <p>
      {props.status}: {props.msg}
    </p>
  );
};

export default ErrorPage;
