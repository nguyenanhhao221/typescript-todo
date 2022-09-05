import React from 'react';
import { ToDoList } from '../App';
import SingleToDo from './SingleToDo';

type Props = {
  todoList: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
};

function CompleteToDo({ todoList, setTodoList }: Props) {
  return (
    <div className='CompleteTodo w-full bg-red-400 p-3'>
      <h2 className='text-white text-3xl'>Completed</h2>
      <ul className='flex flex-col font-Neucha'>
        {todoList
          .filter(todo => todo.isDone === true)
          .map(todo => (
            <li key={todo.id} className='py-2'>
              <SingleToDo
                todo={todo}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CompleteToDo;
