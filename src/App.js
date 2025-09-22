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

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f2fe 0%, #e8eaf6 100%)',
      padding: '24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    card: {
      maxWidth: '672px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '32px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '8px'
    },
    subtitle: {
      color: '#6b7280'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      marginBottom: '32px'
    },
    statCard: {
      padding: '16px',
      borderRadius: '8px',
      textAlign: 'center'
    },
    statCardBlue: {
      backgroundColor: '#eff6ff'
    },
    statCardGreen: {
      backgroundColor: '#f0fdf4'
    },
    statCardRed: {
      backgroundColor: '#fef2f2'
    },
    statNumber: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '4px'
    },
    statNumberBlue: {
      color: '#2563eb'
    },
    statNumberGreen: {
      color: '#16a34a'
    },
    statNumberRed: {
      color: '#dc2626'
    },
    statLabel: {
      fontSize: '14px'
    },
    inputContainer: {
      display: 'flex',
      gap: '12px',
      marginBottom: '24px'
    },
    input: {
      flex: 1,
      padding: '12px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px',
      outline: 'none'
    },
    addButton: {
      padding: '12px 24px',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    taskList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    taskItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      transition: 'all 0.2s'
    },
    taskItemCompleted: {
      backgroundColor: '#f0fdf4',
      borderColor: '#bbf7d0'
    },
    taskItemIncomplete: {
      backgroundColor: '#f9fafb',
      borderColor: '#e5e7eb'
    },
    checkbox: {
      width: '20px',
      height: '20px'
    },
    taskText: {
      flex: 1,
      fontSize: '16px'
    },
    taskTextCompleted: {
      textDecoration: 'line-through',
      color: '#6b7280'
    },
    taskTextIncomplete: {
      color: '#1f2937'
    },
    iconButton: {
      padding: '8px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      backgroundColor: 'transparent'
    },
    favoriteButton: {
      color: '#6b7280'
    },
    favoriteButtonActive: {
      color: '#dc2626'
    },
    deleteButton: {
      color: '#6b7280'
    },
    emptyState: {
      textAlign: 'center',
      padding: '48px 0',
      color: '#6b7280'
    },
    emptyIcon: {
      fontSize: '48px',
      marginBottom: '16px'
    },
    progressContainer: {
      marginTop: '32px'
    },
    progressHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '8px'
    },
    progressBar: {
      width: '100%',
      height: '12px',
      backgroundColor: '#e5e7eb',
      borderRadius: '6px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#2563eb',
      transition: 'width 0.3s ease'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Task Manager</h1>
          <p style={styles.subtitle}>Stay organized and productive</p>
        </div>

        <div style={styles.statsGrid}>
          <div style={{...styles.statCard, ...styles.statCardBlue}}>
            <div style={{...styles.statNumber, ...styles.statNumberBlue}}>{tasks.length}</div>
            <div style={{...styles.statLabel, ...styles.statNumberBlue}}>Total Tasks</div>
          </div>
          <div style={{...styles.statCard, ...styles.statCardGreen}}>
            <div style={{...styles.statNumber, ...styles.statNumberGreen}}>{completedCount}</div>
            <div style={{...styles.statLabel, ...styles.statNumberGreen}}>Completed</div>
          </div>
          <div style={{...styles.statCard, ...styles.statCardRed}}>
            <div style={{...styles.statNumber, ...styles.statNumberRed}}>{favoriteCount}</div>
            <div style={{...styles.statLabel, ...styles.statNumberRed}}>Favorites</div>
          </div>
        </div>

        <div style={styles.inputContainer}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..."
            style={styles.input}
          />
          <button
            onClick={addTask}
            style={styles.addButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
          >
            Add Task
          </button>
        </div>

        <div style={styles.taskList}>
          {tasks.length === 0 ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>📝</div>
              <p>No tasks yet. Add one above to get started!</p>
            </div>
          ) : (
            tasks.map(task => (
              <div
                key={task.id}
                style={{
                  ...styles.taskItem,
                  ...(task.completed ? styles.taskItemCompleted : styles.taskItemIncomplete)
                }}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  style={styles.checkbox}
                />
                <span
                  style={{
                    ...styles.taskText,
                    ...(task.completed ? styles.taskTextCompleted : styles.taskTextIncomplete)
                  }}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => toggleFavorite(task.id)}
                  style={{
                    ...styles.iconButton,
                    ...(task.favorite ? styles.favoriteButtonActive : styles.favoriteButton)
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#fee2e2'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <Heart size={20} fill={task.favorite ? 'currentColor' : 'none'} />
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  style={{...styles.iconButton, ...styles.deleteButton}}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#fee2e2';
                    e.target.style.color = '#dc2626';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#6b7280';
                  }}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {tasks.length > 0 && (
          <div style={styles.progressContainer}>
            <div style={styles.progressHeader}>
              <span>Progress</span>
              <span>{Math.round((completedCount / tasks.length) * 100)}%</span>
            </div>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${(completedCount / tasks.length) * 100}%`
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;