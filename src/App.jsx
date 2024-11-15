import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import EditSingleData from './pages/EditSingleData';
import AddUser from './pages/AddUser';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact  element={<Home />}/>
      <Route path='/editSingleData/:id' exact  element={<EditSingleData />}/>
      <Route path='/addUser' exact  element={<AddUser />}/>
     
      
    </Routes>
    </>
  );
}

export default App;
