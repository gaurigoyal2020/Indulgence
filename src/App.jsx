import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Todo from './Todo';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='/create' element={<CreateTodo />} />
          <Route path='/create:id' element={<CreateTodo />} />
        </Routes>
      </Router>
    </>    
  )
}

export default App;
