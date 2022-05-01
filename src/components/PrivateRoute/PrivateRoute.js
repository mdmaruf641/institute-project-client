import { Route, Redirect } from "react-router-dom";
import UseAuth from "../../hocks/UseAuth";

function PrivateRoute(props) {
  const { children, ...rest } = props;
  const { AllContexts } = UseAuth();
  const { user } = AllContexts;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
