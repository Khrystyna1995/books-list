import NavBar from './Components/NavBar';
import BooksList from './Components/BooksList';
import AllBooks from './Components/AllBooks';
import AddBook from './Components/AddBooks';
import EditBook from './Components/EditBook';
import NotFound from './Components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={BooksList} />
          <Route exact path='/all' component={AllBooks} />
          <Route exact path='/add' component={AddBook} />
          <Route exact path='/edit/:id' component={EditBook} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
