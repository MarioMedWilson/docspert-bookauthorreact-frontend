import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Book/Home';
import Layout from './Components/Layout';
import BookEdit from './Components/Book/BookEdit';
import NewBook from './Components/Book/NewBook';
import Pages from './Components/Page/Pages';
import EditPage from './Components/Page/EditPage';
import NewPage from './Components/Page/NewPage';
import NotAuthorized from './Components/NotAuthorized';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/notAuthorized' element={<NotAuthorized />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/books/new' element={<NewBook />} />
          <Route path='/books/:id/edit' element={<BookEdit />} />
          <Route path='/books/:id/page' element={<Pages />} />
          <Route path='/books/:id/page/new' element={<NewPage />} />
          <Route path='/books/:id/page/:pk/edit' element={<EditPage />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
