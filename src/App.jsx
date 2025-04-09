import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./routes";

import "./App.css";


export default function App() {
  const router = useRoutes(routes);
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}

      <div className="container px-0">
        <main className="main">
          <div className="row justify-content-between mx-0">
            {!isLoginPage && <Sidebar />}
            {router}
          </div>
        </main>
      </div>
    </>
  );
}
