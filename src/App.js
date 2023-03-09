import { useState, useEffect, createContext } from 'react';
// import About from './components/About';
import Footer from './components/Footer';
import DarkLightSwitch from './components/DarkLightSwitch';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from 'react-router-dom'; 
import TaskContainer from './components/TaskContainer';

export const ThemeContext = createContext(null);

function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }

    getTasks()
  }, [])

  // Fetch tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:4000/tasks')
    const data = response.json()

    return data
  }

  const toggleTheme = () => {
    setTheme(currTheme => currTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <Router>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className="App" id={theme}>
          <Routes>
            <Route
              path='/'
              exact
              element={<TaskContainer tasks={tasks} setTasks={setTasks} />}
            />
            {/* <Route path='/about' element={<About/>} exact /> */}
          </Routes>

          <DarkLightSwitch theme={theme} onToggle={toggleTheme}/>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
