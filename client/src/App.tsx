import { RouterProvider } from "react-router-dom";
import { Md5 } from "ts-md5";
import { router } from "./routers/Router";
const App = () => {
  return (
    <>
      {console.log(Md5.hashStr("john.doe@example.com"))}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
