import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Todo from './Todo';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<TodoList />} />
        </Routes>
      </Router>
    </>    
  )
}

export default App;
