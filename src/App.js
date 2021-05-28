import Header from "./header";
import Note from "./components/Note";
import ShowNotes from './components/ShowNotes'
import NotesDetail from './components/NotesDetail'
import {BrowserRouter, Route}  from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Route exact path='/note' component ={Note} />
    <Route exact path='/note' component ={ShowNotes} />
    <Route exact path='/note/:id' component ={NotesDetail} />
    </BrowserRouter>
  );
}

export default App;
