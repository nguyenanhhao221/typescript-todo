import React from 'react';
import { ToDoList } from '../App';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
  todo: ToDoList;
  todoList: ToDoList[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoList[]>>;
};

const SingleToDo = ({ todo, todoList, setTodoList }: Props) => {
  //handleDone
  //Whenever user clicked on the done button on single todo, go through the todoList array, change any todo object with id matched then changes isDone property.
  const handleDone: (todoId: number) => void = todoId => {
    setTodoList(
      todoList.map(todo => {
        return todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  //handleDelete
  const handleDelete: (todoId: number) => void = todoId => {
    setTodoList(todoList.filter(todo => todo.id !== todoId));
  };
  return (
    <form className="single-todo flex justify-between p-4 rounded-md w-full bg-[url('https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg')]">
      {/* Check is isDone is true, if yes render the straight through, otherwise render normal span text */}
      {todo.isDone ? (
        <s className='todo-text'>{todo.todo}</s>
      ) : (
        <span className='todo-text'>{todo.todo} </span>
      )}

      <div className='flex items-center gap-x-1'>
        <span className='icon cursor-pointer'>
          <AiFillEdit />
        </span>
        <span className='icon cursor-pointer'>
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className='icon cursor-pointer'>
          <MdDone onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
