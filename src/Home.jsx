<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
=======
import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'

>>>>>>> d224fa8ef5a293e73f88885db390cc9a8a8ab8e3
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';



function Home() {
const BASE_URL = "https://versal-backend-i8ax.onrender.com";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/get`)
      .then(result => {
        console.log("Fetched todos:", result.data); // Check shape of data
        // Update this line if backend sends { todos: [...] }
        const fetchedTodos = Array.isArray(result.data) ? result.data : result.data.todos;
        setTodos(fetchedTodos || []);
      })
      .catch(err => console.log("Error fetching todos:", err));
  }, []);

  const handleEdit = (id) => {
    axios.put(`${BASE_URL}/ubdate/${id}`) // <- Corrected "ubdate" typo
      .then(() => location.reload())
      .catch(err => console.log("Error updating:", err));
  };

  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/delete/${id}`)
      .then(() => location.reload())
      .catch(err => console.log("Error deleting:", err));
  };

  return (
    <div className='home'>
      <h1>Todo List</h1>
      <Create />
      <br />
      {
        Array.isArray(todos) && todos.length === 0 ? (
          <div><h2>NO RECORD</h2></div>
        ) : (
          todos.map(todo => (
            <div key={todo._id} className='task'>
              <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                {todo.done ? (
                  <BsFillCheckCircleFill className='icon' />
                ) : (
                  <BsCircleFill className='icon' />
                )}
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
              </div>
              <div>
                <span>
                  <BsFillTrashFill
                    className='icon'
                    onClick={() => handleDelete(todo._id)}
                  />
                </span>
              </div>
            </div>
          ))
        )
      }
    </div>
  );
}

export default Home;
