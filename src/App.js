import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ContextProvider from './context/Contexto'
import Login from './pages/Login';
import './App.css';
import Logout from './pages/Users';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Adress from './pages/Adress';
import CreateUser from './pages/CreateUser';
import NotFound from './components/NotFound';
import UserProvider from './context/UserContext';
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <ContextProvider>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/users' element={<Logout />} />
            <Route path='/adress' element={<Adress />} />

            <Route path='/create-user' element={<CreateUser />}>
               <Route path=':id' element={<CreateUser />} />
            </Route>
          
          </Routes>
          <Footer />
          </UserProvider>
          </ContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
