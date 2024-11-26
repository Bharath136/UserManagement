
import { Slide, ToastContainer } from 'react-toastify';
import './index.css';

import Dashboard from './pages/Dashboard/pages/Dashboard';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
     <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
        limit={3}
      />
      <Dashboard />
     </>
  );
}

export default App;
