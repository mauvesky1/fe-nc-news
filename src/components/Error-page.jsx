import React from "react";

const ErrorPage = props => {
  return (
    <p>
      {props.status}: {props.msg ? props.msg : "An error has occurred"}
    </p>
  );
};

export default ErrorPage;
