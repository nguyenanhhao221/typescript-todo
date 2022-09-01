import React from 'react';
import { ToDoList } from '../App';
import SingleToDo from './SingleToDo';

type Props = {
  todoList: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
};

const AllToDo: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <div className='AllTodo w-full px-3'>
      <ul className='flex flex-col font-Neucha'>
        {todoList.map(todo => (
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
};

export default AllToDo;
