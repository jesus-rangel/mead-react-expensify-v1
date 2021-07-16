// Higher Order Component - A component that renders another component
import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

/* ReactDOM.render(
  <AdminInfo info="There are the details" isAdmin={true} />,
  document.getElementById("app")
); */

ReactDOM.render(
  <AuthInfo info="There are the details" isAuthenticated={true} />,
  document.getElementById("app")
);
