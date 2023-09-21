import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2 className="text-2xl">ooopsss</h2>
      <p>{error.statusText || error.message}</p>
      <p>
        {error.status === 404 && (
          <div>
            <h3>Page not found</h3>
            <p>go back to previous page</p>
            <Link to="/">
              <button className="btn btn-success">yeet</button>
            </Link>
          </div>
        )}
      </p>
    </div>
  );
};

export default ErrorPage;
