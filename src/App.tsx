//import context
import { AuthContextComponent } from "./context/AuthContext/authContext";
//import components
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMap } from "./routes/routes";
import { GlobalStyles } from "./styles/resetStyle";

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <AuthContextComponent>
        <RoutesMap />
      </AuthContextComponent>
    </>
  );
}

export default App;
