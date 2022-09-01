import React from 'react';
import { ToDoList } from '../App';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
  todo: ToDoList;
  todoList: ToDoList[];
};

const SingleToDo: React.FC<Props> = ({ todo, todoList }) => {
  return (
    <form className="single-todo flex justify-between p-4 rounded-md w-full bg-[url('https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg')]">
      <span className='todo-text'>{todo.todo} </span>
      <div className='flex items-center gap-x-1'>
        <span className='icon'>
          <AiFillEdit />
        </span>
        <span className='icon'>
          <AiFillDelete />
        </span>
        <span className='icon'>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
