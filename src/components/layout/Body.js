import Login from "../layout/Login";
import Browse from "../browse/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { APP_ROUTES } from "../../utils/constants/constants";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: APP_ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: APP_ROUTES.BROWSE,
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
