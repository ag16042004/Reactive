import React, { useState } from 'react';
   import { Heart, Trash2 } from 'lucide-react';

   function App() {
     const [tasks, setTasks] = useState([
       { id: 1, text: 'Learn React', completed: false, favorite: false },
       { id: 2, text: 'Build an app', completed: false, favorite: true },
       { id: 3, text: 'Deploy to production', completed: false, favorite: false }
     ]);
     const [newTask, setNewTask] = useState('');

     const addTask = () => {
       if (newTask.trim()) {
         setTasks([...tasks, {
           id: Date.now(),
           text: newTask,
           completed: false,
           favorite: false
         }]);
         setNewTask('');
       }
     };

     const toggleTask = (id) => {
       setTasks(tasks.map(task =>
         task.id === id ? { ...task, completed: !task.completed } : task
       ));
     };

     const toggleFavorite = (id) => {
       setTasks(tasks.map(task =>
         task.id === id ? { ...task, favorite: !task.favorite } : task
       ));
     };

     const deleteTask = (id) => {
       setTasks(tasks.filter(task => task.id !== id));
     };

     const completedCount = tasks.filter(task => task.completed).length;
     const favoriteCount = tasks.filter(task => task.favorite).length;

     return (
       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
         {/* Rest of the JSX from the original code */}
       </div>
     );
   }

   export default App;