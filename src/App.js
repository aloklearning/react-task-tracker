import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

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

  // Fetch Task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:4000/tasks/${id}`)
    const data = response.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {
    // With server addition
    const res = await fetch(
      'http://localhost:4000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      }
    )

    const data = await res.json()
    setTasks([...tasks, data])

    // Without server task addition
    // const id = tasks.length + 1

    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:4000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle =  await fetchTask(id)
    
    // Keeping everything of the task object as is, and only updating
    // reminder to the opposite what it was before
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json()

    setTasks(tasks.map((task) => (
      task.id === id ? {...task, reminder: data.reminder} : task
    )))
  }

  return (
    <div className="container">
      <Header 
        showAdd={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)} 
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      : 'No Tasks To Show'}
    </div>
  );
}

export default App;
