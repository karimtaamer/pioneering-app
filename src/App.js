import "./App.css";
import Sidebar from "./nav/Sidebar";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Page1 from "./page-1/Page1";
import Page2 from "./page-2/Page2";

const router = createBrowserRouter([
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "*",
    element: <Navigate to="/page1" replace />,
  },
]);

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
