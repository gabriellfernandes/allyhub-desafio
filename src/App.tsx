import "./App.css";
import { AuthContextComponent } from "./context/AuthContext/authContext";
import { RoutesMap } from "./routes/routes";
import { GlobalStyles } from "./styles/resetStyle";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthContextComponent>
      <GlobalStyles />
      <ToastContainer />
      <RoutesMap />
    </AuthContextComponent>
  );
}

export default App;
