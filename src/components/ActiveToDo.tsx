import React from 'react';
import { ToDoList } from '../App';
import SingleToDo from './SingleToDo';

type Props = {
  todoList: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
};

function ActiveToDo({ todoList, setTodoList }: Props) {
  return (
    <div className='ActiveToDo w-full bg-teal-300 p-3'>
      <h2 className='text-white text-3xl'>Active</h2>
      <ul className='flex flex-col font-Neucha'>
        {todoList
          .filter(todo => todo.isDone === false)
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

export default ActiveToDo;
