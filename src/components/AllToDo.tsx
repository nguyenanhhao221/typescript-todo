import React from 'react';
import { ToDoList } from '../App';
import CompleteToDo from './CompleteToDo';
import ActiveToDo from './ActiveToDo';

type Props = {
  todoList: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
};

const AllToDo = ({ todoList, setTodoList }: Props) => {
  return (
    <div className='AllTodo w-full px-10 flex gap-4 font-Neucha '>
      <ActiveToDo todoList={todoList} setTodoList={setTodoList} />
      <CompleteToDo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default AllToDo;
