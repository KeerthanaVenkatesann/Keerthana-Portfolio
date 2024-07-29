
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidenav from './Components/Sidenav/Sidenav';
import Aboutme from './Components/Pages/About me/Aboutme';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>} />
<Route path='/a' element={<Sidenav/>}/>
  <Route path='/b' element={<Aboutme/>} />
</Routes>

    </BrowserRouter>
  );
}

export default App;
