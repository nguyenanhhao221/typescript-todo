import React from 'react';
import { ToDoList } from '../App';
import SingleToDo from './SingleToDo';

type Props = {
  todoList: ToDoList[];
};

const AllToDo: React.FC<Props> = ({ todoList }) => {
  return (
    <div className='AllTodo w-full px-3'>
      <ul className='flex flex-col font-Neucha'>
        {todoList.map(todo => (
          <li key={todo.id} className='py-2'>
            <SingleToDo todo={todo} todoList={todoList} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllToDo;
